import React,{useState} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {heightPixel,widthPixel,normalize} from './Utils/PixelNormalization';
import {Picker} from '@react-native-picker/picker';

  const AppPicker = (props) => {

    const [selectedLanguage, setSelectedLanguage] = useState("Java");

    function Item(name,id){
      return(
        <Picker.Item label={name} value={id} />
      );
    }

    function Items(){

      return props.items.map((name,id) => {
            return (
              Item(name,id)
            )
          });
    }

    return (
        <Picker
          style={{marginTop:heightPixel(0),width:'100%'}}
          selectedValue={(selectedLanguage)}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
        }>
        {Items()}
        </Picker>
    );
}

export default AppPicker;
