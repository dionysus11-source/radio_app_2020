import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class DetailScreen extends React.Component{
    render(){
        //console.log("DetailScreen");
        this.props.navigation.state.params.callback("경기도");
        return( <View style={styles.container}>
            <Text style={styles.text}> Set Location</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.state.params.callback("경기도")}><Text>경기도</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.state.params.callback("경상북도")}><Text>경상북도</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><Text>Go back</Text></TouchableOpacity>
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
        backgroundColor : "white",//"#FDF6AA"
        
        //padding : 20,
    },
    text:{
        color : "#2c2c2c",
        fontSize : 30
    },
});

