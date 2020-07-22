import MainScreen from "./MainScreen.js"
import DetailScreen from "./DetailScreen.js"
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppStackNavigator = createStackNavigator(
    {
        Main : MainScreen,
        Details: DetailScreen,
    },
    {
        initialRouteName : 'Main',
    }
);

export default createAppContainer(AppStackNavigator);