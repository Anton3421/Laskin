import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';

export default function App() {

  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const addingButtonPressed = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
    setData([...data, { key: text}]);
    setText(number1 + " + " + number2 + " = " + sum);
  }
  
  const deductionButtonPressed = () => {
    const deduct = parseFloat(number1) - parseFloat(number2);
    setResult(deduct);
    setData([...data, { key: text}]);
    setText(number1 + " - " + number2 + " = " + deduct);
  }

  const ListHeader = () => {
      <View>
        <Text style={styles.textStyle}>
            History
        </Text>
      </View>
  };
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
      </View>
      <View style={styles.flatListContainer}>
        <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()} 
          ListHeaderComponent={ListHeader}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    
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
  flatListContainer: {
    flexDirection: 'row',
    marginTop: 80, 
    marginLeft: 165,
    alignItems: 'flex-start',
    padding: 7,
  },
  textStyle: {
    padding: 7,
  },
  
});
