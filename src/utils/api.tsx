import axios from "axios";

const customFetch = axios.create({
  // baseURL: "https://www.petlovers.app.br:3000/api/v1",
  baseURL: "http://localhost:3000/api/v1"
});

export default customFetch;
