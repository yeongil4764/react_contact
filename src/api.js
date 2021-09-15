import axios from "axios";
const apiBaseUrl = "https://address-api2.herokuapp.com";

export const getAll = async () => {
  try {
    const res = await axios.get(`${apiBaseUrl}/contacts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const DeleteContact = async (deleteNum) => {
  try {
    await axios.delete(`${apiBaseUrl}/contacts/${deleteNum}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
  } catch (err) {
    return await err.response.status;
  }
};

export const CreateContact = async (contact) => {
  try {
    const res = await axios.post(`${apiBaseUrl}/contacts`, contact, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getOne = async (number) => {
  try {
    const res = await axios.get(`${apiBaseUrl}/contacts/${number}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateContact = async (number, contact) => {
  try {
    await axios.put(`${apiBaseUrl}/contacts/${number}`, contact, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
  } catch (err) {
    return await err.response.status;
  }
};

export const Login = async (user) => {
  try {
    const res = await axios.post(`${apiBaseUrl}/login`, user);
    localStorage.setItem("Token", res.data.aceessToken);
    return res;
  } catch (err) {
    return await err.response.status;
  }
};
