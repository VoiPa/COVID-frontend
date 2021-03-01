import axios from 'axios';
import {API_URL} from '../common/constants';

/* We receive data by country */
export const fetchByCountry = async ({country}) => {
   return await axios.post(API_URL, {country})
   .then(response=>response.data);
}

/* We receive list of countries */
export const uniqCountries = async (params) => {
   return await axios.post(`${API_URL}/get-unique-countries`)
   .then(response=>response.data);
}