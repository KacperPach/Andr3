import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'; 
import Slider from '@react-native-community/slider'; 
  
  
function InputScreen2(props){
  
  const [Value,setValue] = useState(0);
  const [Smile, setSmile] = useState(0);
  
  if(Smile == 0)
  {

  return(
  
  <View style={styles.SmolcontainerC}>
  <View style={styles.sliderStyle}>
  <Text style={styles.titleInput}>How do you feel today?</Text>
      <TouchableOpacity onPress={() => setSmile(1)} style={styles.circle}>
        <Ionicons name="md-happy" size={30} color="#ef476f" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSmile(2)} style={styles.circle}>
        <Ionicons name="md-sad" size={30} color="#ef476f" />
      </TouchableOpacity>
  </View>
    <View style={styles.sliderStyle}>
    <Text style={styles.titleInput}>How many hours have you slept?</Text>
      <Slider 
      style={{width: 100, height: 40, margin: 20}}
      step={1} 
      value={Value}
      onValueChange={value => setValue(value)} 
    minimumValue={0}
    maximumValue={24}
    minimumTrackTintColor="white"
    maximumTrackTintColor='blue'
  />
  <View>
  <Text>Hours:{Value}</Text>
  </View>
  </View>
     </View> 
  );
  }
  
  else if(Smile == 1){
  
  return(

  <View style={styles.SmolcontainerC}>
  <View style={styles.sliderStyle}>
      <Text style={styles.titleInput}>How do you feel today?</Text>
      </View>
      <TouchableOpacity onPress={() => setSmile(1)} style={styles.circlehappy}>
        <Ionicons name="md-happy" size={30} color="white" />
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => setSmile(2)} style={styles.circle}>
        <Ionicons name="md-sad" size={30} color="#ef476f" />
      </TouchableOpacity>
      <View><Text>Great!</Text></View>
      <View style={styles.sliderStyle}>
    <Text style={styles.titleInput}>How many hours have you slept?</Text>
      <Slider 
      style={{width: 100, height: 40, margin: 20}}
      step={1} 
      value={Value}
      onValueChange={value => setValue(value)} 
    minimumValue={0}
    maximumValue={24}
    minimumTrackTintColor="white"
    maximumTrackTintColor='blue'
  />
  <View>
  <Text>Hours:{Value}</Text>
  </View>
  </View>
     </View> 
    
  );
  }

  else if(Smile == 2){
  
  return(

  <View style={styles.SmolcontainerC}>
  <View style={styles.sliderStyle}>
  <Text style={styles.titleInput}>How do you feel today?</Text>
  </View>
  <TouchableOpacity onPress={() => setSmile(1)} style={styles.circle}>
    <Ionicons name="md-happy" size={30} color="#ef476f" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setSmile(2)} style={styles.circlesad}>
    <Ionicons name="md-sad" size={30} color="white" />
  </TouchableOpacity>
  <View><Text>Don't worry!</Text></View>
  <View style={styles.sliderStyle}>
    <Text style={styles.titleInput}>How many hours have you slept?</Text>
      <Slider 
      style={{width: 100, height: 40, margin: 20}}
      step={1} 
      value={Value}
      onValueChange={value => setValue(value)} 
    minimumValue={0}
    maximumValue={24}
    minimumTrackTintColor="white"
    maximumTrackTintColor='blue'
  />
  <View>
  <Text>Hours:{Value}</Text>
  </View>
  </View>
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
        justifyContent: 'center',
        flexDirection:"column",
        borderRadius: 10
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
      },
      sliderStyle:{
        flex: 2,
        flexDirection:'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 10,
      }
    });