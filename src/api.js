import axios from "axios";
const apiBaseUrl = "https://address-api2.herokuapp.com/contacts";

export const getAll = async () => {
  try {
    const res = await axios.get(apiBaseUrl);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const DeleteContact = async (deleteNum) => {
  try {
    await axios.delete(`${apiBaseUrl}/${deleteNum}`);
  } catch (err) {
    console.log(err);
  }
};

export const CreateContact = async (contact) => {
  try {
    const res = await axios.post(apiBaseUrl, contact);
    return res.data;
  } catch (err) {
    return await err.response.status;
  }
};

export const getOne = async (number) => {
  try {
    const res = await axios.get(`${apiBaseUrl}/${number}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const UpdateContact = async (number, contact) => {
  try {
    await axios.put(`${apiBaseUrl}/${number}`, contact);
  } catch (err) {
    return await err.response.status;
  }
};
