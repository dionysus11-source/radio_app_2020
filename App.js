import React from 'react';
import Loading from "./Component/Loading";
import Radio from "./Component/Navigator";
import axios from "axios";

import {Icon} from 'native-base'
import MainScreen from "./Component/MainScreen.js";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Navigator from "./Component/Navigator.js"

export default class App extends React.Component {
  render(){
    return <Navigator />
  }
  
}