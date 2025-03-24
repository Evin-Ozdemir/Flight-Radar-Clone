import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "0ff9762f2amsh7e790cd2de882eep1c8ef1jsnc21d76f63b90",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
