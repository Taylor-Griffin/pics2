import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DEOleT6ATSHx-a-bRI2a7JwzraqbxJVuEHn6uzJL2GM",
  },
});
