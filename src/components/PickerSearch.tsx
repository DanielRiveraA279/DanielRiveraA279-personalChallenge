import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { PickerInterface } from '../interface/pickerInterface';
import { styles } from '../styles/general';

export const PickerSearch = ({select, onValueChange}:PickerInterface) => {

    useEffect(() => {
        //dispara los resultados de la ciudad actual cuando inicia la app por primera vez
        onValueChange("Buenos Aires, Argentina")
    }, []);

    return (
        <View>
            <Picker
                selectedValue={select}
                style={styles.picker}
                onValueChange={(itemValue) => onValueChange(itemValue.toString())}
                mode="dialog"
            >
                <Picker.Item label="Ciudad Actual, Buenos Aires" value="Buenos Aires, Argentina" />
                <Picker.Item label="Cordoba, Argentina" value="Cordoba, Argentina" />
                <Picker.Item label="Catamarca, Argentina" value="Catamarca, Argentina" />
                <Picker.Item label="Corrientes, Argentina" value="Corrientes, Argentina" />
                <Picker.Item label="Entre Ríos, Argentina" value="Entre Rios, Argentina" />
                <Picker.Item label="Formosa, Argentina" value="Formosa, Argentina" />
            </Picker>
        </View>
    )
}