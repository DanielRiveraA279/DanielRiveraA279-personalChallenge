import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientInterface } from '../interface/gradientInterface';

export const GradientBackground = ({children}: GradientInterface) => {
    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={['#D16BA5', '#86A8E7', '#5FFBF1']}
                style={{...StyleSheet.absoluteFillObject}}
            />
            {children}
        </View>
    )
}