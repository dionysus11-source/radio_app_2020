import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default class DetailScreen extends React.Component{
    render(){
        //console.log("DetailScreen");
        this.props.navigation.state.params.callback("경기도");
        return( <View style={styles.container}>
            <View style={styles.button}>
            <Text style={styles.text}> 청취지역 선택 </Text>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.items} onPress={()=>{
                this.props.navigation.state.params.callback("경기도");
                this.props.navigation.goBack();
            }}><Text>경기도</Text></TouchableOpacity>
            </View>
            <View style={styles.button} >
            <TouchableOpacity style={styles.items} onPress={()=>{
                this.props.navigation.state.params.callback("경상북도");
                this.props.navigation.goBack();
            }}><Text>경상북도</Text></TouchableOpacity>
            </View>
            <View style={styles.button}>
            <TouchableOpacity style={styles.items} onPress={()=>this.props.navigation.goBack()}><Text>Go back</Text></TouchableOpacity>
            </View>
        </View>);

    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        //justifyContent : "space-around", //"flex-end",
        alignItems : "center",
        backgroundColor : "white",//"#FDF6AA"
        //paddingHorizontal: 30,
        //padding : 20,
        borderColor:'#eee',
        borderBottomWidth:0.5,

    },
    text:{
        color : "#2c2c2c",
        fontSize : 30,
        alignItems : "center",
        justifyContent : "center",

    },
    button: {
        alignItems: "center",
        backgroundColor: "white", //"#DDDDDD",
        padding: 10,
        width : 400,
        height : 60,
        fontSize : 30,
        alignItems : "center",
        borderBottomWidth:0.5,
        padding : 10,
        justifyContent : "center",
    },
    items:{
        padding:10,
        backgroundColor:'yellow',
        borderRadius:5,
    },
});

