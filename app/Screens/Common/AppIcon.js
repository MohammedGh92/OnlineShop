import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';

  const AppIcon = (props) => {
    return (
        <Icon size={normalize(props.size?props.size:19)} color={props.color?props.color:GLOBAL.Color.white} name={props.name?props.name:"arrow-right"} />
    );
}

export default AppIcon;
