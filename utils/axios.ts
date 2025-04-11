import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_PIXABAY_API_URL}?key=${process.env.EXPO_PUBLIC_PIXABAY_API_KEY}&`,
  timeout: 5000,
});
