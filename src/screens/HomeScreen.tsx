import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, ScrollView, FlatList, Alert, RefreshControl, Image, TextInput, Button, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import Moment from 'moment';
import { useWeather } from "../hooks/useWeather";
import { Usedebouncevalue } from "../hooks/useDebouncedValue";
import { styles } from '../styles/general';
import { InputSearch } from '../components/InputSearch';
import { GradientBackground } from '../components/GradientBackground';
import { PickerSearch } from '../components/PickerSearch';

export const HomeScreen = () => {
    const { weatherList, getWeather } = useWeather();
    const [textValue, setTextValue] = useState('');
    const debouncedValue = Usedebouncevalue(textValue, 500);

    useEffect(() => {
       getWeather(debouncedValue);
    }, [debouncedValue]);

    return (
        <GradientBackground>
            <ScrollView>
                {Object.values(weatherList).length >= 1 ?
                    <Text style={styles.title}>CLIMA</Text> :
                    <Text style={styles.subtitle}>BUSCAR CLIMA</Text>
                }
                {Object.values(weatherList).length >= 1 && <View style={styles.current}>
                    <Image
                        style={styles.largeIcon}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${weatherList[0]?.weather[0]?.icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.textDetail}>{Math.round(weatherList[0]?.main.temp)}°C</Text>
                </View>}

                {Object.values(weatherList).length >= 1 && <Text style={styles.subtitle}>{weatherList[0]?.weather[0]?.description.toUpperCase()}</Text>}

                <View>
                    <PickerSearch
                        select={debouncedValue}
                        onValueChange={setTextValue}
                    />
                    {/* <InputSearch
                        placeholder="Ciudad Actual Buenos Aires"
                        placeholderTextColor="white"
                        value={textValue}
                        onChangeText={setTextValue}
                    /> */}

                    {Object.values(weatherList).length >= 1 && <Text style={styles.subtitle}>Pronostico 5 dias /Hora</Text>}
                    {Object.values(weatherList).length >= 1 && <FlatList
                        horizontal
                        data={weatherList.slice(3)}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(data) => {
                            var dt = new Date(data.item.dt * 1000);
                            return <View style={styles.hour}>
                                <Image
                                    style={styles.smallIcon}
                                    source={{
                                        uri: `http://openweathermap.org/img/wn/${data.item.weather[0]?.icon}@4x.png`,
                                    }}
                                />
                                <Text>{Moment(data.item.dt_txt).format('LL')}</Text>
                                <Text>{dt.toLocaleTimeString().replace(/:\d+ /, ' ')}</Text>
                                <Text style={styles.textDetail}>{Math.round(data?.item.main.temp)}°C</Text>
                                <Text>{data.item.weather[0]?.description}</Text>
                            </View>
                        }}
                    />}
                </View>
            </ScrollView>
        </GradientBackground>
    )
}