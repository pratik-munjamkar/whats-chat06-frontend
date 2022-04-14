import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsaapp-06.herokuapp.com",
});

export default instance;