import axios from "axios";

export default async url => {
  try {
    let res = await axios({
      method: "POST",
      baseURL: process.env.VUE_APP_APIROOT,
      url
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
