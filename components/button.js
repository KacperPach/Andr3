import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const RButton1 = ({onPress}) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.circle}>
        <Ionicons name="md-body" size={30} color="#ef476f" />
      </View>
    </TouchableOpacity>
  );
}

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

export default RButton1;
