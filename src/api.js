import axios from "axios";
import cookie from "react-cookies";
import { refresh, refreshErrorHandle } from "./lib/refresh";

const apiBaseUrl = "https://address-api2.herokuapp.com";

const expires = new Date();
const rexpires = new Date();
expires.setDate(Date.now() + 1000 * 60 * 5);
rexpires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 7);

const Api = axios.create({
  baseURL: apiBaseUrl
})

Api.interceptors.request.use(refresh, refreshErrorHandle);

if (cookie.load("accessToken")) {
  Api.defaults.headers.common["Authorization"] = `Bearer ${cookie.load(
    "accessToken"
  )}`;
}

export const getAll = async () => {
  try {
    const res = await Api.get(`${apiBaseUrl}/contacts`);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const DeleteContact = async (deleteNum) => {
  try {
    await Api.delete(`${apiBaseUrl}/contacts/${deleteNum}`);
  } catch (err) {
    return await err.response.status;
  }
};

export const CreateContact = async (contact) => {
  try {
    const res = await Api.post(`${apiBaseUrl}/contacts`, contact);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getOne = async (number) => {
  try {
    const res = await Api.get(`${apiBaseUrl}/contacts/${number}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateContact = async (number, contact) => {
  try {
    await Api.put(`${apiBaseUrl}/contacts/${number}`, contact);
  } catch (err) {
    return await err.response.status;
  }
};

export const Login = async (userinfo) => {
  try {
    const res = await Api.post(`${apiBaseUrl}/login`, userinfo);
    const { accessToken, expireAt, rtid, user } = res.data;

    Api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    cookie.save("accessToken", accessToken, {
      path: "/",
      httpOnly: true,
      expires,
      secure: true,
    });
    cookie.save("expireAt", expireAt, {
      path: "/",
      expires,
      httpOnly: true,
      secure: true,
    });
    cookie.save("rtid", rtid, {
      path: "/",
      httpOnly: true,
      rexpires,
      secure: true,
    });
    cookie.save("name", user.name, {
      path: "/",
      httpOnly: true,
      expires,
      secure: true,
    })
    return accessToken;
  } catch (err) {
    return await err.response.status;
  }
};

export const deleteRt = async (rtid) => {
  try {
    await Api.delete(`${apiBaseUrl}/contacts/rt/${rtid}`);
  } catch (err) {
    return await err.response.status;
  }
};
