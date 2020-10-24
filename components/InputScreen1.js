import React, {useState, useEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';



function InputScreen1(props) {

  const save = async() => { //zapisuje "energię" 
  try {   // try bo jest asynchroniczne i nie wykonuje się zawsze od razu czasem sie nie udaje
    await AsyncStorage.setItem('TasksKey', JSON.stringify(Goals)); // komenda zapisuje w pliku Json zawartość zimennej energy 
  }catch (ERR) // catch zwraca wiadomość erroru w przypadku wystąpienia problemu przy zapisaniu 
  {
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

    const [Goals, setGoals] = useState([]);
    
    let [insidetext, setInText] = useState('');

    const addItems = () => {

      setGoals([...Goals, {
        id: Goals.length,
        value: insidetext
      }])
      setInText('');

      save();
    };
      //usuwanie do dokończenia 
 
    return (
        <View style={styles.Smolcontainer}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent:'space-around'}}>
        <Text style={styles.titleInput}>My goals:</Text>
        <TextInput style={styles.inputtext}  placeholder='Type your goals' value={insidetext} onChangeText={insidetext => setInText(insidetext)}></TextInput>
        <TouchableOpacity style={styles.circle} onPress={addItems}>
        <Ionicons name="ios-checkmark" size={30} color="white" style={{alignSelf:'center'}}/>
        </TouchableOpacity>
        </View>
       
     
        <View style={styles.SmolcontainerContent}>
    <FlatList
       
        data={Goals}
        renderItem={({item}) => 
        <View style={{backgroundColor: '#BBB', width:'95%', alignSelf:'center', borderRadius:10, margin:3.5}}>
        <TouchableOpacity style={{width:'3%', alignSelf:'flex-end'}} >
        <Ionicons name="ios-close" size={24} color="black" style={{alignSelf:'flex-end', margin:4}}/>
        </TouchableOpacity>
        <Text style={styles.item}>{item.value}</Text>
        
        </View>}
      />
        </View>
       </View> 
    );
    
}

export default InputScreen1;


const styles = StyleSheet.create({
titleInput:{
    fontSize: 20,
    marginTop: 15,
    marginLeft: 10,
  },
  inputtext:{
    borderWidth: 1,
    borderColor: '#000000',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 6
  },
  Smolcontainer:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
    top: 30,
    borderRadius: 10
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