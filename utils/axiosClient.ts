import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://localhost:3000/api/";

axiosClient.defaults.timeout = 1000;

axiosClient.defaults.withCredentials = true;

export default axiosClient;
