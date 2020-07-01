import React from 'react';
import {View,ScrollView} from 'react-native';
import {Icon, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import Loading from "./Loading.js"
import Radio from "./Navigator.js"
import TimeTable from "./TimeTable.js"
import Schedule from "./Schedule.js"
import axios from "axios";


export default class Mainscreen extends React.Component{
    static navigationOptions = {
        headerLeft:<Icon name='ios-camera' style={{paddingLeft:20}} />,
        headerTitleStyle : {alignSelf : 'center'},
        title : "Radio Information",
        headerRight:<Icon name='ios-send' style={{paddingRight:20}}/>,
    }
    state={
        isLoading : true,
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
    componentDidMount(){
        location = "경기도";
        this.getRadio(location);
    };
    render(){
        const {isLoading, programs, time} = this.state;
        //console.log(programs);
        //console.log(time);
        return isLoading? <Loading />: 
        // <ScrollView>
        //    <View style = {styles.contianer}>
        //     <TimeTable  time={time} />
        //     <Text>tt</Text>
        //    </View>
        // </ScrollView>
        <ScrollView>
        <View style={styles.container}>
            <View>
                <Text></Text>
            </View>
            <TimeTable  time={time} />
        </View>
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

// export default class MainScreen extends React.Component {
//     static navigationOptions = {
//         headerLeft:<Icon name='ios-camera' style={{paddingLeft:20}} />,
//         headerTitleStyle : {alignSelf : 'center'},
//         title : "Radio Information",
//         headerRight:<Icon name='ios-send' style={{paddingRight:20}}/>,
//     }
//   state={
//     isLoading : true
//   }
//   getRadio = async(location) => {
//     const{
//       data:{
//         programs,
//         time
//       }
//     } = await axios.get(`http://dionysus11.asuscomm.com:2020/getRadioProgram/${location}`);
//     this.setState({isLoading:false, programs:programs, time: time});
//   };
//   componentDidMount(){
//     location = "경기도";
//     this.getRadio(location);
//   }
//   render(){
//     const {isLoading, programs, time} = this.state;
//     return  isLoading? <Loading />:<Radio programs={programs} time={time} />;
//   }
  
// }