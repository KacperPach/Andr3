import React, {useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//poooooooooooooooooooog
function InputScreen3(props) {
   
  const save = async() => {  
  try {   
    await AsyncStorage.setItem('TasksKey', JSON.stringify(Calories)); 
  }catch (ERR) {
    alert(ERR);
  }

}

const load = async() => {
  try{
    let tasksAwait = await AsyncStorage.getItem('TaskKey');
    if(tasksAwait !== null)
    {
      setStats(JSON.parse( tasksAwait));
    }
  }catch(err)
  {
    alert(err)
  }
}

  useEffect( () => { 
    load();

  },[]);

    const [Calories, setCalories] = useState([]);

    let [insidetext, setInText] = useState('');

    const addItems = () => {

      setCalories([...Calories, {
        id: Calories.length,
        value: insidetext
      }])
      setInText('');

      save();
    };
    
    return (
      <View style={styles.Smolcontainer}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignContent:'space-around'}}>
      <View style={{flexDirection: "column", marginTop: 6}}>
      <Text style={styles.titleInput}>Daily</Text>
      <Text style={styles.titleInput}>calories:</Text>
      </View>
      <TextInput style={styles.inputtext}  placeholder='Be honest' value={insidetext} onChangeText={insidetext => setInText(insidetext)}></TextInput>
      <TouchableOpacity style={styles.circle} onPress={addItems}>
      <Ionicons name="ios-checkmark" size={30} color="white" style={{alignSelf:'center'}}/>
      </TouchableOpacity>
      </View>
     
   
      <View style={styles.SmolcontainerContent}>
  <FlatList
      data={Calories}
      renderItem={({item}) => 
      <View style={{backgroundColor: '#BBB', width:'95%', alignSelf:'center', borderRadius:10, margin:3.5}}>
      <Text style={styles.item}>{item.value}</Text>
      </View>}
    />
      </View>
     </View> 
    );
}

export default InputScreen3;


const styles = StyleSheet.create({
titleInput:{
    fontSize: 20,
    marginLeft: 10,
  },
  inputtext:{
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    margin: 10,
    width: 218,
    borderRadius: 6
  },
  Smolcontainer:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 30,
    borderRadius: 10 ,
  },
  inputtextButton:{
    margin: 10,
    backgroundColor: '#28A2C3',
    width: 200,
    height:40,
    borderRadius: 10,
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  SmolcontainerContent:{
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  
    
  },
  circle: {
    marginTop: 7,
    height:50,
    width:50,
    borderRadius: 50,
    backgroundColor:'#ef476f',
    alignItems: 'center',
    justifyContent: 'center',
  

  },
});