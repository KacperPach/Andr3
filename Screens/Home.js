import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect} from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler} from 'react-native';

import RButton1  from './../components/button.js';
import RButton2 from './../components/button2.js';
import RButton3 from './../components/button3.js';
import RButton4 from './../components/button4.js';




export default function  Home({ navigation }){



  const [buttonstate, setButtonState] = useState(2);

  const aHight = useRef( new Animated.Value(100)).current;


  const openMe1 = () => {

        setButtonState(1);

        Animated.timing( aHight, {
            toValue: 300,
            duration: 1000,
          }
        ).start();
  };
  
  const openMe2 = () => {

    setButtonState(2);

    Animated.timing( aHight, {
        toValue: 300,
        duration: 1000,
      }
    ).start();
};

const openMe3 = () => {

  setButtonState(3);

  Animated.timing( aHight, {
      toValue: 300,
      duration: 1000,
    }
  ).start();
};

const openMe4 = () => {

  setButtonState(4);

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
      return(<Text>Ekran 1</Text>);
    }
    else if(OnScreen == 2){ return(<Text>Ekran 2</Text>); }
    else if(OnScreen == 3){ return(<Text>Ekran 3</Text>);}
    else if(OnScreen == 4){ return(<Text>Ekran 4</Text>); }
    else {
      return(<View></View>);
    }
  }


  return (

    <View style={styles.container}>

      <ImageBackground source={require('./../assets/background.png')} style={styles.image}/>

      <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
        </TouchableOpacity>
        <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame {buttonstate}</Text>
      </View>


      
      <Button title='adios' onPress={() =>navigation.openDrawer()}></Button>
      
      <Button title='fuck go back' onPress={closeMe}></Button>

        <Animated.View style={[styles.bottom, {height: aHight}]}>
          <RButton1 onPress={openMe1} state={buttonstate}/>
          <RButton2 onPress={openMe2} state={buttonstate}/>
          <RButton3 onPress={openMe3} state={buttonstate}/>
          <RButton4 onPress={openMe4} state={buttonstate}/>
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
  
    bottom:{
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      height:100,
      backgroundColor: '#4b4b4d',
      justifyContent: 'space-around',
      flexDirection: 'row',
      padding: 15,
  
  
    },
    
  });
  
  