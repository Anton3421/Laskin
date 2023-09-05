import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {

  const [text, setText] = useState('');

  return (


    <View style={styles.container}>
      <View>
        <Text>Result: </Text>
      </View>
      <View>
        <TextInput keyboardType={"numeric"}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setText(text)}
        />
        <TextInput keyboardType={"numeric"}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setText(text)}
        />
      </View>
      <View flexDirection='row'>
        <Button onPress={buttonPressed} title="+"></Button>
        <Button onPress={buttonPressed} title="-"></Button>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const buttonPressed = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
