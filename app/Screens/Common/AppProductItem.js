import React from 'react';
import {View,ImageBackground} from 'react-native';
const GLOBAL = require('./Globals');
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';
import {AppText,AppIcon,AppBTN} from './';
import StarRating from 'react-native-star-rating-widget';

const AppProductItem = (props) => {
  function nothing(){}

    return (
        <View style={{borderColor:GLOBAL.Color.borderColor,borderWidth:1,alignItems:'center',backgroundColor:'white',margin:widthPixel(5),width:widthPixel(170),height:'100%'}}>
          <View style={{height:'47%',width:'100%'}}>
            <ImageBackground source={props.item.link}  style={{marginTop:'2%',width:'100%',height:'100%'}}>
              <View style={{borderRadius:normalize(7),margin:normalize(7),alignItems:'center',justifyContent:'center',backgroundColor:GLOBAL.Color.c1,width:'27.5%',height:'15%'}}>
                <AppText color={GLOBAL.Color.white} size={8} text={'New'}/>
              </View>
            </ImageBackground>
              <AppText margin={5} marginTop={5} size={10} textAlign={'left'} text={'\t  Model'} color={'#8A888C'}/>
              <AppText margin={10} textAlign={'left'} size={10.5} color={GLOBAL.Color.darkGrey} text={'Product tile and some details'}/>
              <StarRating emptyColor={GLOBAL.Color.grey} starSize={normalize(20)} starStyle={{width:'5%'}} style={{alignItems:'center',width:'45%',height:'10%'}} rating={3} onChange={nothing}/>
              <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',margin:normalize(13)}}>
                <View>
                  <AppText crossed text={'$550'} size={11} color={GLOBAL.Color.grey} textAlign='left'/>
                  <AppText marginTop={3} text={'$400'} size={12} color={GLOBAL.Color.c1} textAlign='left'/>
                </View>
                <AppIcon color={GLOBAL.Color.c1} size={25} name={'heart-outline'}/>
              </View>
              <AppBTN text={'Add to cart'} textColor={GLOBAL.Color.c1} height={25} width={140} textSize={11} borderColor={GLOBAL.Color.c1} borderWidth={3} color={'transparent'} borderRadius={7} />
          </View>
        </View>
    );
};
export default AppProductItem;
