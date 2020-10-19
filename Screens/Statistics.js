import { Ionicons } from '@expo/vector-icons';
import React, {useState, useRef, useEffect} from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler} from 'react-native';


export default function Statistics({ navigation }){

    const [BState, setBState] = useState(1);


    

    function BClicked(props) {

        
        
        const Bstate = props.Bstate;

        if(Bstate == 1) 
        {
          return(<TouchableOpacity style={styles.quest}></TouchableOpacity>);
        }
        else if(Bstate == 2)
        { 
            return(<TouchableOpacity style={styles.quest2}></TouchableOpacity>); 
        }
        else 
        {
          return(<TouchableOpacity style={styles.quest}></TouchableOpacity>);
        }
      }

  return(
  
    <View>
    
    <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="ios-menu" size={45} color='white' style={{flex: 1, alignSelf: 'center'}}/>
      </TouchableOpacity>
      <Text style={{flex: 3, color: 'white', alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>HealthPlayingGame</Text>
    </View>
    
    <View style={{alignItems:'center',backgroundColor: '#909090'}}>  
    <Text style={{color:'white'}}>Today's quests:</Text>
    </View>
    
    <View>
    <BClicked style={styles.quest} onPress={() => setBState(2)} Bstate={BState}></BClicked>  
    <Text style={{color:'white'}}>Walnij wiadro</Text>
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
    quest:{
        alignItems:'center',
        backgroundColor:'grey',
        height: 80,
    },
    quest2:{
        alignItems:'center',
        backgroundColor:'green',
        height: 80,
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
  