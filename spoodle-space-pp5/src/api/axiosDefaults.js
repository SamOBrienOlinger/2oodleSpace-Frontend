import axios from "axios";

// axios.defaults.baseURL = "https://spoodlespace.herokuapp.com/";
axios.defaults.baseURL = "https://3000......./";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
