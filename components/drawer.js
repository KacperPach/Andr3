import React from 'react';
import { View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Dimensions } from 'react-native';



const Name = "Paris";
const Age = "18";


const DrawerNavigator = createDrawerNavigator({
  Name,
  Age
})


export default createAppContainer(DrawerNavigator);