import axios from "axios";
import moment from "moment";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const refresh = async (config) => {
  const rtid = cookies.get("rtid");
  const expireAt = cookies.get("expireAt") * 1000;

  const expires = new Date();

  let token = cookies.get("accessToken");
  let time = cookies.get("expireAt")

  expires.setDate(Date.now() + 1000 * 60 * 15);

  if (moment(expireAt).diff(moment()) < 0 && rtid) {
    const { data } = await axios.post(`https://address-api2.herokuapp.com/rt`, {
      id: Number(rtid),
      name: cookies.get("name"),
    });
    console.log(data);
    token = data.accessToken;
    time = data.expireAt;
  
    cookies.set("accessToken", token, {
      path: "/",
      httpOnly: true,
      expires,
      secure: true,
    });

    cookies.set(
      "expireAt",
      time,
      {
        path: "/",
        httpOnly: true,
        expires,
        secure: true,
      }
    );
  }
  config.headers["Authorization"] = `Bearer ${token}`;

  return config;
};

const refreshErrorHandle = (err) => {
  cookies.remove("rtid");
};

export { refresh, refreshErrorHandle };
