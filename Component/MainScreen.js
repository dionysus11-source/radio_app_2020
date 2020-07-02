import React from 'react';
import {View,ScrollView} from 'react-native';
import {Icon, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Loading from "./Loading.js"
import Schedule from "./Schedule.js"
import axios from "axios";


export default class Mainscreen extends React.Component{
    static navigationOptions = {
        headerLeft:<Icon name='ios-camera' style={{paddingLeft:20}} />,
        headerTitleStyle : {alignSelf : 'center'},
        title : "Radio",
        headerRight:<Icon name='ios-send' onPress={() => {
            const {location} = this.state}
        } style={{paddingRight:20}} />,
    }
    state={
        isLoading : true,
        location : "경기도",
    }
    getRadio = async(location) => {
        console.log("GetRadio is called");
        const{
            data:{
            programs,
            time
        }
        }   = await axios.get(`http://dionysus11.asuscomm.com:2020/getRadioProgram/${location}`);
        this.setState({isLoading:false, programs:programs, time: time});
    };
    componentDidMount(){
        const {location} = this.state;
        this.getRadio(location);
    };
    render(){
        const {isLoading, programs, time} = this.state;
        return isLoading? <Loading />: 
        <ScrollView>
        {/* <View style={styles.container}>
            <View>
                <Text></Text>
            </View>
            <TimeTable  time={time} />
        </View> */}
        <View>
            <Schedule programs={programs} />
        </View>
        </ScrollView>

    }
}

const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            flexDirection : 'row',
            alignItems:'stretch',
            justifyContent:'space-between',
            padding : 5,
        },
    }
);