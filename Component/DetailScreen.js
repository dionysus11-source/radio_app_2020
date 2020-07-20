import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default class DetailScreen extends React.Component{
    render(){
        console.log("Detail Screen");
        return( <View style={styles.container}>
            <Text style={styles.text}> detail screen...</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    justifyContent : "center", //"flex-end",
    alignItems : "center",
    //paddingHorizontal: 30,
    //paddingVertical : 100,
    backgroundColor : "white"//"#FDF6AA"
    },
    text:{
        color : "#2c2c2c",
        fontSize : 30
    }
});