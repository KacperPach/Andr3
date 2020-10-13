import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';



const RButton2 = ({onPress}) => {
    return(
      <TouchableOpacity onPress={onPress}>
        <View style={styles.circle}>
          <Ionicons name="md-happy" size={30} color="#ebad21" />
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

export default RButton2;
