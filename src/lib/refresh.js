import cookie from "react-cookies";
import moment from "moment";
import axios from "axios";

const refresh = async (config) => {

  const rtid = cookie.load("rtid");
  const expireAt = cookie.load("expireAt") * 1000;

  let token = cookie.load("accessToken");

  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 5);

  if (moment(expireAt).diff(moment()) < 0 && rtid) {
    console.log('here');
    const { data } = await axios.post(`https://address-api2.herokuapp.com/rt`, {
      id: Number(rtid),
      name: cookie.load("name"),
    });

    token = data.data.accessToken;
    cookie.save("accessToken", data.data.accessToken, {
      path: "/",
      httpOnly: true,
      expires,
      secure: true,
    });
    cookie.save(
      "expireAt",
      moment().add(5, "minute").format("yyyy-MM-DD HH:mm:ss"),
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
  cookie.remove("rtid");
};

export { refresh, refreshErrorHandle };
