import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={isEnabled ? styles.container2 : styles.container} >
      <Text style = {isEnabled ? styles.white : styles.black}>Darkmode</Text>
      <StatusBar style="auto" />
      <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                value={isEnabled}
                onValueChange={() => setIsEnabled(previousState => !previousState)}
      />
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
    white: {
        color: '#fff',
    },
    black:{
        color: '#000',
    }
});
