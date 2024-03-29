import axios from "axios";
import { BASE_URL } from "./constants";

const postUser = async (payload) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await axiosInstance.post('api/v1/auth/login', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createUser = async (payload) => {
  console.log(payload);
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await axiosInstance.post('api/v1/auth/signup', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};



const createNote = async (payload) => {
  console.log(payload);
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await axiosInstance.post('api/v1/notes/create-note', payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


const getUserNotes = async (email) => {
  console.log(email);
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  try {
    const response = await axiosInstance.post('api/v1/notes/get-user-note', {email: email});
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};




// const handleGettingRestaurants = async () => {
//     const axiosInstance = axios.create({
//         baseURL: BASE_URL
//       });
//     try {
//       const response = await axiosInstance.get(gettingAllBusiness);
//       return response.data;
//     } catch (error) {
//         console.log(error)
//     }
//   };

export const AuthenticationPostAPI = {
  postUser,
  createUser,
  createNote,
  getUserNotes
  // handleGettingRestaurants,
}