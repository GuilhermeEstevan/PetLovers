import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://15.228.54.44:3000/api/v1",
});

export default customFetch;
