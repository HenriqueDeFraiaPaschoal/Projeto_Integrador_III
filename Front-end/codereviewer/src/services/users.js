import axios from "axios";
import { URL_BASE } from "constants";

// para login precisa de user e password
export const Signin = async (data) => {
  const response = await axios.post(`${URL_BASE}/users`, data);
  return response;
};

export const NewPost = async (post) => {
  const response = await axios.post(`${URL_BASE}/post`, post);
  return response.data;
};

export const GetAllPosts = async () => {
  const response = await axios.get(`${URL_BASE}/posts`);
  return response.data;
};
