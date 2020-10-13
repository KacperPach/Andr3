import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const RButton3 = () => {
      return(
        <TouchableOpacity>
          <View style={styles.circle}>
            <Ionicons name="md-pizza" size={30} color="#06d6a0" />
          </View>
        </TouchableOpacity>
      );}


      const styles = StyleSheet.create({
            circle: {
              height:60,
              width:60,
              borderRadius: 50,
              backgroundColor:'#e7e7e7',
              alignItems: 'center',
              justifyContent: 'center'
            },
          });

export default RButton3;
