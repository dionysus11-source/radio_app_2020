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
  // state={
  //   isLoading : true
  // }
  // getRadio = async(location) => {
  //   const{
  //     data:{
  //       programs,
  //       time
  //     }
  //   } = await axios.get(`http://dionysus11.asuscomm.com:2020/getRadioProgram/${location}`);
  //   this.setState({isLoading:false, programs:programs, time: time});
  // };
  // componentDidMount(){
  //   location = "경기도"
  //   this.getRadio(location);
  // }
  render(){
    //const {isLoading, programs, time} = this.state;
   // return  isLoading? <Loading />:<Radio programs={programs} time={time} />;
    return <Navigator />
  }
  
}



// const AppStackNavigator = createStackNavigator({
//   Main : {
//       screen : MainScreen
//   }
// });

// export default createAppContainer(AppStackNavigator);

