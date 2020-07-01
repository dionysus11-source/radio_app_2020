import React from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native"
import PropTypes from "prop-types"
import MainScreen from "./MainScreen.js"
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';



// export function Radio({programs, time}){
//    console.log(programs);
//    console.log(time);
//    return (

//              <Text>dd</Text>
//    );

// }

// Radio.PropTypes = {
//     programs: PropTypes.array.isRequired,
//     time: PropTypes.array.isRequired
// };

// const styles = StyleSheet.create(
//     {
//         container :{
//             flex : 1,
//         },
//         header : {
//             height : 60,
//             backgroundColor : '#e93e42',
//         },
//         content : {
//             flex : 1,
//            backgroundColor: '#f5a942',
//         },
//         footer : {
//             height : 50,
//             backgroundColor : '#4fbc7a',
//         },
//     }
// )

const AppStackNavigator = createStackNavigator({
    Main : {
        screen : MainScreen
    }
});

export default createAppContainer(AppStackNavigator);