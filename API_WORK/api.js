import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.100.156:5050/api/v1",
});
