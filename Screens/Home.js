import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef, useEffect} from 'react';
import {Image, Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler , TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import RButton1 from './../components/button.js';
import RButton2 from './../components/button2.js';
import RButton3 from './../components/button3.js';
import RButton4 from './../components/button4.js';

import Clock from './../components/clockquest.js';

import InputScreen1 from '../components/InputScreen1.js';
import InputScreen2 from '../components/InputScreen2.js';
import InputScreen3 from '../components/InputScreen3.js';
import InputScreen4 from '../components/InputScreen4.js';


export default function  Home({ navigation }){


  const [buttonstate, setButtonState] = useState();

  const aHight = useRef( new Animated.Value(100)).current;

  const [stats, setStats] = useState({energy: 0, health: 0, quest: 0, expiriance: 0});

  const save = async() => { //zapisuje "energię" 
    try {   // try bo jest asynchroniczne i nie wykonuje się zawsze od razu czasem sie nie udaje
      await AsyncStorage.setItem('statsKey', JSON.stringify(stats)); // komenda zapisuje w pliku Json zawartość zimennej energy 
    }catch (ERR) // catch zwraca wiadomość erroru w przypadku wystąpienia problemu przy zapisaniu 
    {
      alert(ERR);
    }
 
  }

  const load = async() => {
    try{
      let statsAsName = await AsyncStorage.getItem('statsKey');
      if(statsAsName !== null)
      {
        setStats(JSON.parse(statsAsName));
      }
    }catch(err)
    {
      alert(err)
    }
  }

useEffect( () => { 
  load();

  const backAction = () => {
    closeMe();
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    
    backAction
  );
  
  return () => backHandler.remove();
  
},[]);


  const openMe = () => {  // otwiera pasek na dole 

        Animated.timing( aHight, {
            toValue: 300,
            duration: 1000,
          }
        ).start();
  };

  const closeMe = () => { // Zamyka pasek na dole
        Animated.timing( aHight, {
            toValue: 100,
            duration: 1000,
          }
        ).start();
        setButtonState(0);
        
  };

  const BContainetr = (props) => { //dolny pasek i jego różne ekrany 
    const OnScreen = props.OnScreen;
    if(OnScreen == 1)
    {
      return(

      <InputScreen1></InputScreen1>

      );
    }
    else if(OnScreen == 2){ return( //Ekran po kliknięciu przyciusku 2

      <InputScreen2></InputScreen2>

      ); }
    else if(OnScreen == 3){ return(

      <InputScreen3></InputScreen3>

      );}
    else if(OnScreen == 4){ return(

     <InputScreen4></InputScreen4>


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

    <Text style={{position: 'absolute', top:180, left: 330, borderRadius: 20, fontWeight: 'bold' }}>Energy</Text>
    <View style={{position: 'absolute', backgroundColor: 'blue', width:220, height:15, top:200, left: 155, borderRadius: 20 }}></View>
    <View style={{position: 'absolute', backgroundColor: 'white', width: stats.energy, height:15, top:200, left: 155, borderRadius: 20 }}></View>

    <Text style={{position: 'absolute', top:225, left: 330, borderRadius: 20, fontWeight: 'bold' }}>Health</Text>
    <View style={{position: 'absolute', backgroundColor: 'red', width:220, height:15, top:245, left: 155, borderRadius: 20 }}></View>
    
    <Text style={{position: 'absolute', top:270, left: 330, borderRadius: 20, fontWeight: 'bold' }}>Daily Quests</Text>
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

        <View style={{ backgroundColor:'white', alignSelf:'flex-end', borderWidth: 2, borderColor: 'black', borderRadius: 5, top:170}}> 
        <Text style={{alignSelf:'center', fontWeight:'bold'}}> Pog debag box</Text>

        <View style={{flexDirection: 'row', }}>
        <Button title='add' onPress={() => {setStats({energy: stats.energy+20})}}></Button>
        <Button title='save' onPress={() => {save()}}></Button>
        <Button title='load' onPress={() => {load()}}></Button>
        <Button title='delete' onPress={() => {setStats({energy: 0}); save();}}></Button>
        </View>
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
