import axios from 'axios';
import { KEY_OPENWEATHERMAP } from '../utils/key';

//configuramos params
const weatherDB = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: KEY_OPENWEATHERMAP,
        units: 'metric',
        lang: 'ES',
    }
});

export default weatherDB;