import { useState } from 'react';
import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';


export default function History() {  
    
    const [data, setData] = useState([]);
    
    const ListHeader = () => {
        return (
        <View>
          <Text style={styles.textStyle}>
              History
          </Text>
        </View>
        )
    };

    return (
    <View style={styles.container}>
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
