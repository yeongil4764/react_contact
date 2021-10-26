import axios from "axios";
import Cookies from "universal-cookie";
import { refresh, refreshErrorHandle } from "./lib/refresh";

const cookies = new Cookies();

const Api = axios.create({
  baseURL: "https://address-api2.herokuapp.com",
});

Api.interceptors.request.use(refresh, refreshErrorHandle);

export const Login = async (userinfo) => {
  try {
    const expires = new Date();
    const rexpires = new Date();
    const res = await Api.post("/login", userinfo);
    const { accessToken, expireAt, rtid, user } = res.data;

    expires.setDate(Date.now() + 1000 * 60 * 15);
    rexpires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 7);

    Api.defaults.headers.common["Authorization"] = `Bearer ${res}`;

    cookies.set("accessToken", accessToken, {
      path: "/",
      httpOnly: false,
      expires,
      secure: true,
    });
    cookies.set("expireAt", expireAt, {
      path: "/",
      httpOnly: false,
      expires,
      secure: true,
    });
    cookies.set("rtid", rtid, {
      path: "/",
      httpOnly: false,
      rexpires,
      secure: true,
    });
    cookies.set("name", user.name, {
      path: "/",
      httpOnly: false,
      expires,
      secure: true,
    });

    return true;
  } catch (err) {
    return await err.response.status;
  }
};

export const deleteRt = async (rtid) => {
  try {
    await Api.delete(`/contacts/rt/${rtid}`);
  } catch (err) {
    return await err.response.status;
  }
};

export const CreateContact = async (contact) => {
  try {
    const res = await Api.post("/contacts", contact);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getAll = async () => {
  try {
    const res = await Api.get("/contacts");
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getOne = async (number) => {
  try {
    const res = await Api.get(`/contacts/${number}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateContact = async (number, contact) => {
  try {
    await Api.put(`/contacts/${number}`, contact);
  } catch (err) {
    return await err.response.status;
  }
};

export const DeleteContact = async (deleteNum) => {
  try {
    await Api.delete(`/contacts/${deleteNum}`);
  } catch (err) {
    return await err.response.status;
  }
};
