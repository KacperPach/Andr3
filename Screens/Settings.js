import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect} from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler} from 'react-native';


export default function Settings({ navigation }){
  return(
  
    <View style={styles.container}>

    <ImageBackground source={require('./../assets/ProfileScreen.jpg')} style={styles.image}/>

    <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
      </TouchableOpacity>
      <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame</Text>
    
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      resizeMode: "cover",
      position: 'absolute',
      top:0,
      bottom:100,
      left:0,
      right:0,
  
    },
    container:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#909090'
    },
  
    top:{
      flexDirection: 'row',
      height:70,
      backgroundColor: '#4b4b4d',
      alignItems: 'flex-start',
      padding: 25
    },
  
   
  });
  