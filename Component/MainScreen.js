import React from 'react';
import {View,ScrollView} from 'react-native';
import {Icon, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Loading from "./Loading.js"
import Schedule from "./Schedule.js"
import axios from "axios";
import { NavigationActions } from 'react-navigation';

export default class Mainscreen extends React.Component{
    static navigationOptions = ({navigation}) =>{
        const {params={}} = navigation.state;
        return {
            headerLeft: ()=>(
                <Icon name='ios-navigate' onPress={()=> navigation.navigate('Details',{callback:params.setLocation})}  style={{paddingLeft:20}} />
            ),
            headerTitleStyle : {alignSelf : 'center'},
            title : "Radio",
            headerRight: () =>(
                <Icon name='ios-refresh' onPress={navigation.getParam('refreshPage')} style={{paddingRight:20}} />
            ),
        };
    };
    state={
        isLoading : true,
        location : "경기도",
    }
    getRadio = async(location) => {
        const{
            data:{
            programs,
            time
        }
        }   = await axios.get(`http://dionysus11.asuscomm.com:2020/getRadioProgram/${location}`);
        this.setState({isLoading:false, programs:programs, time: time});
    };
    refreshPage = () =>{
        const {location} = this.state;
        this.setState({isLoading:true});
        this.getRadio(location);
    };
    setLocation = (location) =>{
        this.setState({location:location});

    };
    componentDidMount(){
        const {location} = this.state;
        //console.log(this);
        this.props.navigation.setParams({
            isLoading : this.state.isLoading,
            location : this.state.location,
            refreshPage : this.refreshPage,
            setLocation : this.setLocation,
        });
        this.getRadio(location);
    };
    render(){
        const {isLoading, programs, time, isModal} = this.state;
        //console.log(this.state.location);
        return isLoading? <Loading />: 
        <ScrollView>
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