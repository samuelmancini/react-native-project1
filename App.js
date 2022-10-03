import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";
import WeatherUI from "./components/WeatherUI";

export default function App() {
    const [isLoading, setLoading] = useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const [input, setInput] = useState('9020');
    const [data, setData] = useState([]);
    const getWeather = async () => {
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + input + ",at&appid=f5ea329349ed821a393ce49bfd1418c8");
            const json = await response.json();
            setData(json);
        } catch {
            console.log("Error");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getWeather();
    }, [input]);

    return (
        <View style={isEnabled ? styles.container2 : styles.container}>
            <Text style={isEnabled ? styles.titleTextWhite : styles.titleTextBlack}>Welcome to my first React Native Website</Text>
            <Text style={isEnabled ? styles.titleTextWhite : styles.titleTextBlack}>OpenWeatherMap</Text>
            <TextInput style={isEnabled ? styles.whiteTextInput : styles.blackTextInput}
                       placeholder="Enter the PLZ you would like to view"
                       placeholderTextColor={isEnabled ? "white" : "black"} onSubmitEditing={text => setInput(text.nativeEvent.text)}/>
            <Text style={isEnabled ? styles.white : styles.black}>Darkmode</Text>
            <StatusBar style="auto"/>
            <Switch trackColor={{false: "#767577", true: "#81b0ff"}}
                    style={{position: 'absolute', bottom: 0, right: 0,}}
                    value={isEnabled}
                    onValueChange={() => setIsEnabled(previousState => !previousState)}
            />
            {isLoading ? <ActivityIndicator/> : <WeatherUI plz={data} mode={isEnabled}/>}
        </View>
    );
}

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
    whiteTextInput: {
        height: 40,
        width: 300,
        color: '#fff',
    },
    blackTextInput: {
        height: 40,
        width: 300,
        color: '#000',
    },
    white: {
        color: '#fff',
        position: 'absolute',
        bottom: 20,
        right: 0,
    },
    black: {
        color: '#000',
        position: 'absolute',
        bottom: 20,
        right: 0,
    },
    titleTextWhite: {
        color: '#fff',
        fontSize: 20,
        fontWeight: "bold"
    },
    titleTextBlack: {
        color: '#000',
        fontSize: 20,
        fontWeight: "bold"
    }
});
