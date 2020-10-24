import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
  
  
  
function InputScreen2(props){
  
  const [Smile, setSmile] = useState(0);
  
  if(Smile == 0)
  {

  return(
  
  <View style={styles.SmolcontainerC}>
      <View>
      <Text style={styles.titleInput}>How do you feel today?</Text>
      </View>
      <TouchableOpacity onPress={() => setSmile(1)}>
      <View style={styles.circle}>
        <Ionicons name="md-happy" size={30} color="#ef476f" />
      </View>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => setSmile(2)}>
      <View style={styles.circle}>
        <Ionicons name="md-sad" size={30} color="#ef476f" />
      </View>
      </TouchableOpacity>
     </View> 
  );
  }
  
  else if(Smile == 1){
  
  return(

  <View style={styles.SmolcontainerC}>
      <View>
      <Text style={styles.titleInput}>How do you feel today?</Text>
      </View>
      <TouchableOpacity onPress={() => setSmile(1)}>
      <View style={styles.circlehappy}>
        <Ionicons name="md-happy" size={30} color="white" />
      </View>
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => setSmile(2)}>
      <View style={styles.circle}>
        <Ionicons name="md-sad" size={30} color="#ef476f" />
      </View>
      </TouchableOpacity>
      <View><Text>Great!</Text></View>
     </View> 

  );
  }

  else if(Smile == 2){
  
  return(

  <View style={styles.SmolcontainerC}>
  <View>
  <Text style={styles.titleInput}>How do you feel today?</Text>
  </View>
  <TouchableOpacity onPress={() => setSmile(1)}>
  <View style={styles.circle}>
    <Ionicons name="md-happy" size={30} color="#ef476f" />
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setSmile(2)}>
  <View style={styles.circlesad}>
    <Ionicons name="md-sad" size={30} color="white" />
  </View>
  </TouchableOpacity>
  <View><Text>Don't worry!</Text></View>
 </View> 
  );
  }
    else{

      return(

      <View></View>
      );
    }

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
      circlehappy: {
        height:60,
        width:60,
        borderRadius: 50,
        backgroundColor:'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green'
      },
      circlesad: {
        height:60,
        width:60,
        borderRadius: 50,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
      }
    });