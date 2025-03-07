import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const APIEP = `https://www.omdbapi.com/?apikey=${API_KEY}`;
// https://www.omdbapi.com/?apikey=5c56910&t=a`
export const fetchData = async (str) => {
  try {
    const url = `${APIEP}&t=${str}`;
    // console.log(url);
    const response = await axios.get(url);
    // console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
