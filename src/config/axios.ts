import axios from "axios";
import { api_url } from "../constants";

const axiosClient = axios.create({
  baseURL: api_url,
});

export default axiosClient;
