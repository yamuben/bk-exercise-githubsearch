import axios from "axios";
import { BASE_URL } from "../../assets/constants";
// import "dotenv/config"

export const getUsersService = async (data: any,page?:number) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/users?q=${data}&per_page=30&page=${page||1}`);
    return res;
  } catch (err) {
    console.log("error: ", err);
  }
};
