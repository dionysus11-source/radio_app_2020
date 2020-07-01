import React from "react";
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from "react-native"
import PropTypes from "prop-types"
import MainScreen from "./MainScreen.js"
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppStackNavigator = createStackNavigator({
    Main : {
        screen : MainScreen
    }
});

export default createAppContainer(AppStackNavigator);