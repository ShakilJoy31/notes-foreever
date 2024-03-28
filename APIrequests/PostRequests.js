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
    createUser
    // handleGettingRestaurants,
  }