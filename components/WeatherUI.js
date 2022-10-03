import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";

export default function WeatherUI(props) {
    return (
        <View style={props.mode ? styles.container2 : styles.container}>
            <Text style={props.mode ? styles.white : styles.black}>PLZ: {props.plz.name}</Text>
            <Text style = {props.mode ? styles.white : styles.black}>Weather: {props.plz.weather[0].description}</Text>
            <Text style = {props.mode ? styles.white : styles.black}>Temperature: {Math.floor(props.plz.main.temp - 273.15)}°</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    white: {
        color: '#fff',
    },
    black: {
        color: '#000',
    }
});