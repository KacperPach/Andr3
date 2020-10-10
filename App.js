import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect}from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';



function RButton1 () {
  return(
    <TouchableOpacity>
      <View style={styles.circle}>
        <Ionicons name="md-body" size={30} color="#ef476f" />
      </View>
    </TouchableOpacity>
  );}
  function RButton2 () {
    return(
      <TouchableOpacity>
        <View style={styles.circle}>
          <Ionicons name="md-happy" size={30} color="#ebad21" />
        </View>
      </TouchableOpacity>
    );}
    function RButton3 () {
      return(
        <TouchableOpacity>
          <View style={styles.circle}>
            <Ionicons name="md-pizza" size={30} color="#06d6a0" />
          </View>
        </TouchableOpacity>
      );}
      function RButton4 () {
        return(
          <TouchableOpacity>
            <View style={styles.circle}>
              <Ionicons name="md-pulse" size={24} color="#118ab2" />
            </View>
          </TouchableOpacity>
        );}






export default function App() {
  const aHight = useRef( new Animated.Value(100)).current;

  const openMe = () => {
        Animated.timing( aHight, {
            toValue: 300,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
  };
  const closeMe = () => {
        Animated.timing( aHight, {
            toValue: 100,
            duration: 1000,
            useNativeDriver: true,
          }
        ).start();
  };


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text></Text>
      </View>
      <ImageBackground source={require('./assets/background.png')} style={styles.image}>
      <Text>HOla!</Text>
      <Button title='adios' onPress={openMe}></Button>
      <Button title='fuck go back' onPress={closeMe}></Button>
      </ImageBackground>

        <Animated.View style={[styles.bottom, {height: aHight}]}>
          <RButton1/>
          <RButton2/>
          <RButton3/>
          <RButton4/>
        </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    position: 'relative',
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#909090'
  },

  top:{
    height:70,
    backgroundColor: '#4b4b4d'
  },

  bottom:{
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,

    height:100,
    backgroundColor: '#4b4b4d',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 15

  },
  circle:{
    height:60,
    width:60,
    borderRadius: 50,
    backgroundColor:'#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
