import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
    },
    subtitle: {
        fontSize: 22,
        marginVertical: 12,
        marginLeft: 4,
        color: 'white',
    },
    textDetail: {
        color: 'white',
        fontSize: 18
    },

    current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
    },
    hour: {
        padding: 6,
        alignItems: 'center',
    },
    largeIcon: {
        width: 250,
        height: 200,
    },
    smallIcon: {
        width: 100,
        height: 100,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: 'white',
        color: 'white'
    },
    picker: {
        height: 60, 
        width: '100%', 
        color: 'white',
        fontSize: 18,
    },
    fixToText: {
        height: 40,
        margin: 12,
    },
});