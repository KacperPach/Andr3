import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, {Component, useState, useRef, useEffect} from 'react';
import {Image, Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler} from 'react-native';

import RButton1 from './../components/button.js';
import RButton2 from './../components/button2.js';
import RButton3 from './../components/button3.js';
import RButton4 from './../components/button4.js';
import Clock from './../components/clockquest.js';



export default function  Home({ navigation }){



  const [buttonstate, setButtonState] = useState(0);

  const aHight = useRef( new Animated.Value(100)).current;
  
  
  const openMe = () => {

        Animated.timing( aHight, {
            toValue: 300,
            duration: 1000,
          }
        ).start();
  };
  

  const closeMe = () => {
        Animated.timing( aHight, {
            toValue: 100,
            duration: 1000,
          }
        ).start();
  };

  function BContainetr(props) {
    const OnScreen = props.OnScreen;
    if(OnScreen == 1) 
    {
      return(


       <View style={styles.Smolcontainer}>
       
       <Image source={require('./../assets/ProfileBar.png')} style={styles.imageBar}/>
       
       <Text>Ekran 1</Text>
       </View> 
    
    
     
      );
    }
    else if(OnScreen == 2){ return( //Ekran po kliknięciu przyciusku 2
    
    
    
      <View style={styles.Smolcontainer}>
      <Text>Ekran 2</Text>
     </View> 
    
      ); }
    else if(OnScreen == 3){ return(
      
      
      
      <View style={styles.Smolcontainer}>
      <Text>Ekran 3</Text>
      <Button onPress={() => Clock()}></Button>
     </View> 
      
      
      );}
    else if(OnScreen == 4){ return(



      <View style={styles.Smolcontainer}>
      <Text>Ekran 4</Text>
     </View> 
      
      ); }
    else {
      return(
      
      
      <View></View>

      );
    }
  }

  const User = () => 
  {

    return( 
    <>
    
    <View style={{position: 'absolute', backgroundColor: 'blue', width:220, height:15, top:200, left: 155, borderRadius: 20 }}></View>
    <View style={{position: 'absolute', backgroundColor: 'red', width:220, height:15, top:245, left: 155, borderRadius: 20 }}></View>
    <View style={{position: 'absolute', backgroundColor: 'green', width:220, height:15, top:290, left: 155, borderRadius: 20 }}></View>
    <View style={{position: 'absolute', backgroundColor: 'yellow', width:220, height:15, top:335, left: 155, borderRadius: 20 }}></View>
    <Image source={require('./../assets/avatar.png')} style={{width: 280, height: 320, position: 'absolute', top: 80, left:-70}}></Image>
    </>
    );
  }


  return (

    <View style={styles.container}>

    <ImageBackground source={require('./../assets/background.png')} style={styles.image}/>

    <User style={{position: 'absolute', top: 200}}/>
      

    

      <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
        </TouchableOpacity>
        <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame {buttonstate}</Text>
      
      </View>
        
      <View> 
      
       </View>
      


        <Animated.View style={[styles.bottom, {height: aHight}]}>
          <View style={styles.buttonContainer} >
          <RButton1 onPress={() => {openMe(); setButtonState(1); } } state={buttonstate}/>
          <RButton2 onPress={() => {openMe(); setButtonState(2); }} state={buttonstate}/>
          <RButton3 onPress={() => {openMe(); setButtonState(3); }} state={buttonstate}/>
          <RButton4 onPress={() => {openMe(); setButtonState(4); }} state={buttonstate}/>
          </View>
          <BContainetr OnScreen={buttonstate}/>
        </Animated.View>  

      <StatusBar style="auto" />
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
    imageBar: {
      flex: 1,
      resizeMode: "cover",
      position: 'absolute',
      width:150,
      height: 150,
  
    },
    Smolcontainer:{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignItems: 'center',
      top: 30,
    },

    container:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#909090'
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
     

    },
  
    top:{
      flexDirection: 'row',
      height:70,
      backgroundColor: '#4b4b4d',
      alignItems: 'flex-start',
      padding: 25
    },
  
    bottom:{
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      height:100,
      backgroundColor: '#4b4b4d',
      flexDirection: 'column',
      padding: 15,
      alignItems: 'stretch',
  
  
    },
    
  });
  
  