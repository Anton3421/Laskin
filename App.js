import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {

  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const addingButtonPressed = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  }
  
  const deductionButtonPressed = () => {
    const deduct = parseFloat(number1) - parseFloat(number2);
    setResult(deduct);
  }

  return (


    <View style={styles.container}>
      <View>
        <Text>Result: {result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput keyboardType={"numeric"}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={number1 => setNumber1(number1)}
          
        />
        <TextInput keyboardType={"numeric"}
          style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={number2 => setNumber2(number2)}
          
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={addingButtonPressed} title="+"></Button>
        <Button onPress={deductionButtonPressed} title="-"></Button>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20, 
    alignItems: 'flex-start',
  },
});
