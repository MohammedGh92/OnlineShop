import React,{useState} from 'react';
import {View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import {normalize} from './Utils/PixelNormalization';
import {AppIcon,AppText} from './';

  const AppQuantity = (props) => {

    const [quantity, setQuantity] = useState(1);

    const incAmount = () => {
      setQuantity(quantity+1);
    }

    const decAmount = () => {
        if(quantity<=1)
          return;
        setQuantity(quantity-1);
     }

    return (
        <View style={{backgroundColor:'#F7F7F7',borderColor:GLOBAL.Color.borderColor,borderWidth:1,flexDirection:'row',width:'35%',height:'90%'}}>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'25%'}} onPress={decAmount}><AppIcon size={24} color={GLOBAL.Color.c1} name={'minus'} /></TouchableOpacity>
          <AppText size={17} text={quantity} style={{justifyContent:'center',width:'50%'}}/>
          <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:'25%'}} onPress={incAmount}><AppIcon size={27} color={GLOBAL.Color.c1} name={'plus'} /></TouchableOpacity>
        </View>
    );
}
export default AppQuantity;
