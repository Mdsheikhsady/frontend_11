import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend11-two.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
