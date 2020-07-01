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

    //return null;
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
            <ScrollView horizontal = {true}>
            <View style={styles.container}>
                <View>
                <Text>{channel}</Text>
                </View>
                <View style={styles.container}>
                <ScheduleObject schedules={schedule} />  
                </View>
            </View>
            </ScrollView>
        );
        //return null;
    }

}

class ScheduleObject extends React.Component{
    
    render(){
        const {schedules} = this.props;
        console.log(schedules);
        return(
            schedules.map(tt=>{
                return (
                    <ScheduleList  schedule={tt} />
                );
            })
        );
    }

}

class ScheduleList extends React.Component{
    
    render(){
        const {schedule} = this.props;
        return(
            <View>
                <Text>{schedule}</Text>    
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
            padding : 5,
        },
    }
);


// const {
//     data: {
//       main: { temp },
//       weather
//     }
//   }