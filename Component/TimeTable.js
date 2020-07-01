import React from 'react';
import {Text} from 'react-native';
import PropTypes from "prop-types"

export default function TimeTable({time}){
    console.log(time);
    return (
        <Text>test</Text>
    );
}


TimeTable.PropTypes = {
    time: PropTypes.array.isRequired
};