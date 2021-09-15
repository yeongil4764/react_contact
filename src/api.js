import axios from "axios";
import cookie from "react-cookies";

const apiBaseUrl = "https://address-api2.herokuapp.com";
const expires = new Date();
expires.setDate(Date.now() + 1000 * 60 * 30);

if (cookie.load("accessToken")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${cookie.load("accessToken")}`;
}

export const getAll = async () => {
  try {
    const res = await axios.get(`${apiBaseUrl}/contacts`);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const DeleteContact = async (deleteNum) => {
  try {
    await axios.delete(`${apiBaseUrl}/contacts/${deleteNum}`);
  } catch (err) {
    return await err.response.status;
  }
};

export const CreateContact = async (contact) => {
  try {
    const res = await axios.post(`${apiBaseUrl}/contacts`, contact);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getOne = async (number) => {
  try {
    const res = await axios.get(`${apiBaseUrl}/contacts/${number}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateContact = async (number, contact) => {
  try {
    await axios.put(`${apiBaseUrl}/contacts/${number}`, contact);
  } catch (err) {
    return await err.response.status;
  }
};

export const Login = async (user) => {
  try {
    const res = await axios.post(`${apiBaseUrl}/login`, user);
    const { accessToken } = res.data;
    
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    cookie.save("accessToken", accessToken, {
      path: "/",
      httpOnly: false,
      expires,
      secure: true,
    });
    return accessToken;
  } catch (err) {
    return await err.response.status;
  }
};