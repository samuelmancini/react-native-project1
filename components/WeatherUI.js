import {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Card, Paragraph, Title} from "react-native-paper";

export default function WeatherUI(props) {
    let pictureUrls = [
        {}
    ]
    return (
        <View>
            <Card style={props.mode ? styles.container2 : styles.container}>
                <Card.Title/>
                <Card.Content style = {styles.cardContent}>
                    <Title style={props.mode ? styles.white : styles.black}>{props.plz.name}</Title>
                    <Paragraph style={props.mode ? styles.white : styles.black}>weather: {props.plz.weather[0].description}</Paragraph>
                    <Paragraph style={props.mode ? styles.white : styles.black}>currently: {Math.floor(props.plz.main.temp - 273.15)}°</Paragraph>
                </Card.Content>
                <Card.Cover source={{uri: 'https://openweathermap.org/img/w/' + props.plz.weather[0].icon + '.png'}}/>
            </Card>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    container2: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    white: {
        color: '#fff',
    },
    black: {
        color: '#000',
    },
    cardContent: {
        flex: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});