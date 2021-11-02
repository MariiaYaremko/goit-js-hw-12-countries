import axios from 'axios';

function fetchCountries(searchQuery) {
  axios.defaults.baseURL = 'https://restcountries.com/v2/name/';
  return axios.get(`/${searchQuery}`).then(response => response.data);
}

export default fetchCountries;
