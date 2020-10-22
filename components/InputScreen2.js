import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
  
  
  
function InputScreen2(props){
  return(
  <View style={styles.SmolcontainerC}>
      <View>
      <Text style={styles.titleInput}>How do you feel today?</Text>
      </View>
      <TouchableOpacity onClick={{backgroundColor:'red'}}>
      <View style={styles.circle}>
        <Ionicons name="md-happy" size={30} color="#ef476f" />
      </View>
      </TouchableOpacity>
  
      <TouchableOpacity onClick={{backgroundColor:'red'}}>
      <View style={styles.circle}>
        <Ionicons name="md-sad" size={30} color="#ef476f" />
      </View>
      </TouchableOpacity>
     </View> 
  );
}

export default InputScreen2;

const styles = StyleSheet.create({
    titleInput:{
        fontSize: 20,
        margin: 10
      },
      SmolcontainerC:{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        top: 30,
        flexDirection:"row"
      },
      circle: {
        height:60,
        width:60,
        borderRadius: 50,
        backgroundColor:'#e7e7e7',
        alignItems: 'center',
        justifyContent: 'center'
      },
      
    });