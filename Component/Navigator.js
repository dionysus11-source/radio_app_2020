import MainScreen from "./MainScreen.js"
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppStackNavigator = createStackNavigator({
    Main : {
        screen : MainScreen
    }
});

export default createAppContainer(AppStackNavigator);