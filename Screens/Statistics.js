import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React, {useState, useRef, useEffect} from 'react';
import { Animated,ImageBackground, StyleSheet, Text, Button, TouchableOpacity, View, ScrollView, BackHandler, FlatList} from 'react-native';


export default function Statistics({ navigation }){
    let Counter = 0;
 
    const [i, setIState] = useState(0);
    
    const customData = require('./../components/quests.json');
        
    const points1 = customData[i].tier;
    const points2 = customData[i+1].tier;
    const points3 = customData[i+2].tier;

    const C = () => {

      Counter = Counter+1;
    }  

    function Quest(props) {
        const content = props.content;
        const [BState, setBState] = useState(1);

        if(BState == 1) 
        {
          
          return(
          <TouchableOpacity style={styles.quest}>
          <Text>{content}</Text>
          <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]} onPress={() =>  {setBState(2); C()}}>
          <Ionicons name="ios-checkmark" size={30} color="black" style={{alignSelf:'center'}}/>
          </TouchableOpacity>
       
          </TouchableOpacity>
          );

         
        }
        else if(BState == 2)
        {
          
          return(
          <TouchableOpacity style={[styles.quest, { backgroundColor: 'green'}]}>
          <Text>{content}</Text>
          <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]} onPress={() => setBState(1)}>
          <Ionicons name="ios-close" size={30} color="black" style={{alignSelf:'center'}}/>
          </TouchableOpacity>

          </TouchableOpacity>
          );
        }
        else 
        {
          return(<TouchableOpacity style={styles.quest}></TouchableOpacity>);
        }
      }



      function QuestSet(){

        const Time = new Date().getHours();

        const Day = new Date().getDate();
        //async do dni trza dodać
        
        if(Time >= 12)
      {
        setIState(i+1);
       
      } 
      else{
        setIState(i);
      }
        if(i+3 >= 12)
        {
          setIState(0)
        }
      };
    
      const List = () => {


        console.log(points1)
        
        return(
          <View>
            <FlatList
               data={[
              {key: customData[i].questionText},
              {key: customData[i+1].questionText},
              {key: customData[i+2].questionText},
           
              ]}
              renderItem={({item}) => <Quest content={item.key}/>}

            />
          </View>
        );
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
    <List/> 
    </View>

    <Button  title = "change quests" onPress={() => QuestSet()}></Button>
    <Button  title = "show time" onPress={() => QuestSet()}></Button>
    <Text>Done: {Counter}/3 </Text>
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
        flexDirection: 'row',
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
    button: {
      width: 50,
      height: 50,
      borderRadius: 30,
      justifyContent: 'center',

    },
  
  });
  