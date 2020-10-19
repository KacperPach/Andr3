import React, {useState, useRef, useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Home from './Screens/Home.js';
import Settings from './Screens/Settings.js';
import Statistics from './Screens/Statistics.js';
import QuestData from './components/quests.json';

const Drawer = createDrawerNavigator();

const newQuestData = QuestData.map( ( QuestData) =>
{
  console.log(QuestData.type)
})
export default function App(){



return(

  <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Statistics" component={Statistics} />
      </Drawer.Navigator>
    </NavigationContainer>


);
}
