import axios from 'axios';

export const searchGiphy = (search, page) => {
  return axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&offset=${page}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`);
}