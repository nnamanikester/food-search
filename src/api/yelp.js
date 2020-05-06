import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Pno84Zu4LXXtxPYJHzX0B2hx3Idt9nf-uFZT9UXkPNqt2h2I5Go_tnCDdYEvCEf7atNeSuQVP5Xs300KhFWrlJg3Rc6OoOme3XyI_8NwGFIHyPUYTot823V2sgqyXnYx",
  },
});
