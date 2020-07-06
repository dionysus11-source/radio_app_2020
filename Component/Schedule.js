import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import PropTypes from "prop-types"
import {StyleSheet} from 'react-native';

export default function Schedule({programs}){
    //console.log(programs);
    return(
        programs.map(tt=>{
            return (
                <View style={styles.schedule}>
                <ProgramObject style={styles.container} program={tt} />
                </View>
            );
        })
    );
}


Schedule.PropTypes = {
    Programs: PropTypes.array.isRequired
};

class ProgramObject extends React.Component{
    
    render(){
        const {
            program:{
                channel,
                schedule
            }
        } = this.props;
        return(
            <ScrollView  horizontal = {true}>
            <View style={styles.container}>
                <View style = {styles.channelcontainer}> 
                <Text>{channel}</Text>
                </View>
                <View style={styles.container}>
                <ScheduleObject schedules={schedule} />  
                </View>
            </View>
            </ScrollView>
        );
    }

}

class ScheduleObject extends React.Component{
    
    render(){
        const {schedules} = this.props;
        //console.log(schedules);
        return(
            schedules.map(tt=>{
                return (
                    <View style = {styles.childcontainer}>
                    <ScheduleList schedule={tt} />
                    </View>
                );
            })
        );
    }

}

class ScheduleList extends React.Component{
    
    render(){
        const {schedule} = this.props;
        return(
            <View >
                <Text style = {styles.textstyle}>{schedule}</Text>    
            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            flexDirection : 'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding : 0,
        },
        program : {
            flex : 1,
            paddingLeft : 5,
            paddingTop : 3,
            paddingBottom : 3,
            paddingRight : 5
        },
        channelcontainer:{
            paddingLeft : 10,
            paddingTop : 10,
            paddingBottom : 3,
            paddingRight : 5,
            //margin : 1,
            flex:1,
            height: 60,
            backgroundColor : 'white',
            borderBottomColor : "gray",
            borderBottomWidth : 1,
            borderRightColor : "gray",
            borderRightWidth : 1,
        },
        textstyle : {
            color : "blue",
        },
        childcontainer : {
            paddingLeft : 10,
            paddingTop : 10,
            paddingBottom : 3,
            paddingRight : 5,
            flex:1,
            height: 60,
            backgroundColor : '#FFFFF0',
            borderBottomColor : "gray",
            borderBottomWidth : 1,
            borderRightColor : "gray",
            borderRightWidth : 1,
            // borderLeftColor : "gray",
            // borderLeftWidth : 1,
            // borderTopColor : "gray",
            // borderTopWidth : 1,
            //borderWidth : 1,
            //borderColor : "gray",
            //borderStyle : "solid",
        }
    }
);