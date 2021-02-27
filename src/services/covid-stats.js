import axios from 'axios';
import { API_URL } from '../common/constants';


export const fetchByCountry = async ({country}) => {
    return await axios.post(API_URL, {country})
    .then(response=>response.data);
}