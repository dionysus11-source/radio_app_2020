import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from "prop-types"
import {StyleSheet} from 'react-native';

export default function TimeTable({time}){
    console.log(time);
    return(
        time.map(tt=>{
            return (
                <TimeObject style={styles.container} time={tt} />
            );
        })
    );

    //return null;
}


TimeTable.PropTypes = {
    time: PropTypes.array.isRequired
};

class TimeObject extends React.Component{
    
    render(){
        const {time} = this.props;
        //console.log(time);
        return(
            <View>
                <Text>{time}</Text>    
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