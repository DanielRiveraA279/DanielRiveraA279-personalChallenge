import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import weatherDB from '../api/weatherDB';

import { Pronostico, List } from '../interface/weatherInterface';

export const useWeather = () => {
    const [weatherList, setWeatherList] = useState<List[]>([]);

    const getWeather = async (query: string = '') => {
        try {
            setWeatherList([]);
            const resp = await await weatherDB.get<Pronostico>(`forecast?q=${query}`);
            setWeatherList(resp.data.list);
        } catch (error) {
            setWeatherList([]);
          //console.log(error);
        }
    }

    return {
        weatherList,
        getWeather,
    }

}