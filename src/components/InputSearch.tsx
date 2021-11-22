import React from 'react';
import { TextInput } from 'react-native';
import { InputInterface } from '../interface/inputInterface';
import { styles } from '../styles/general';

export const InputSearch = ({ placeholder, value, placeholderTextColor, onChangeText}: InputInterface) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            autoCorrect={false}
        />
    )
}