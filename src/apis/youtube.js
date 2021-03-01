import axios from "axios";

const KEY = "AIzaSyB1AtTL1wwziF8Tdlml0WBK9ewupvR4jm0";

//pre-configured axios instane of axios
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
