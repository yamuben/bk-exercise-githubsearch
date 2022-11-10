import axios from "axios";
import "dotenv/config"

export const getUsersService = async (data:any) => {
  try {
      const res = await axios.post(`${process.env.BASE_URL}/search/users?q=${data}`,data);
      return res;
  } catch (err) {
    console.log("error: ", err);
  }
};
