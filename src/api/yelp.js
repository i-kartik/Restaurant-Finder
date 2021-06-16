import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Q-9dIXtdeJ9FT9_eq5QfFSbMnIA4gnMgBdj6IJ6rDkd06oI5i9ln_D3IKRJhZ0DSXsG4ZOHwPwHj9zv-zVjhS_Mh_xM-9e_P5fJj2Bo47B4PFes7fSMavKsP4ypWX3Yx",
  },
});
// All above need to same everytime except the api key
