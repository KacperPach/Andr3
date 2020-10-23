import React, {useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';



function InputScreen1(props) {
   
    const [Goal, setGoal] = useState('');
    
    return (
        <View style={styles.Smolcontainer}>
       
       <Text style={styles.titleInput}>My goals:</Text>
       <TextInput style={styles.inputtext}   placeholder='Type your goals' value={Goal} onChangeText={Goal => setGoal(Goal)}></TextInput>
      <TouchableOpacity style={styles.inputtextButton} onPress={console.log(Goal)} >
      <Text>{Goal}</Text>
      </TouchableOpacity>
       </View> 
    );
    
}

export default InputScreen1;


const styles = StyleSheet.create({
titleInput:{
    fontSize: 20,
    margin: 10
  },
  inputtext:{
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    margin: 10,
    width: 200,
  },
  Smolcontainer:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 30,
  },
  inputtextButton:{
    margin: 10,
    backgroundColor: '#28A2C3',
    width: 200,
    height:40,
    borderRadius: 10,
    alignItems: 'center',
  },
});