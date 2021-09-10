import axios from "axios";
const apiBaseUrl = "https://address-api2.herokuapp.com";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("Token");

export const getAll = async () => {
  try {
    const res = await axios.get(`${apiBaseUrl}/contacts`);
    return res.data;
  } catch (err) {
    console.log(err);
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
    const res = await axios.post(`apiBaseUrl/contacts`, contact);
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
    localStorage.setItem("Token", res.data.aceessToken);
  } catch (err) {
    return await err.response.status;
  }
};
