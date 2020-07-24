import React from "react";
import {StyleSheet, Text, View, ActivityIndicator} from "react-native";

export default function Loading(){
    return( <View style={styles.container}>
        {/* <Text style={styles.text}> Loading...</Text> */}
        <ActivityIndicator size="large"  />
    </View>);
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    justifyContent : "center", //"flex-end",
    alignItems : "center",
    backgroundColor : "white"//"#FDF6AA"
    },
    text:{
        color : "#2c2c2c",
        fontSize : 30
    }
});