import axios from "axios";

export const getData = async (endpoint?: string | null) => {
  const url: string = "https://fakestoreapi.com/products/";
  try {
    const response = await axios.get(`${url}${endpoint || ""}`);
    const myData = await response.data;
    return myData;
  } catch (err) {
    console.log(err);
  }
};
