import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppText,AppProductItem} from '../Common/';
import Data from '../MockData/data';
var products = null;

class Products extends React.Component{

  billItem = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',height:'75%',width:'100%'}}>
      <AppText text={'No Products'} size={18}/>
    </View>
  )
  }


  getData(){
    const{
      sectionID,
      subSectionsID
    } = this.props.route.params;
    products=null;
    if(sectionID>=Data.Products.length)
      return;
    if(subSectionsID>=Data.Products[sectionID].length)
      return;
    products = Data.Products[sectionID][subSectionsID];
  }

  render() {
    const{
      secitionName,
      sectionID,
      subSectionsID
    } = this.props.route.params;
    this.getData();

    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={secitionName}/>
        <View style={{height:'100%',width:'95%'}}>
          {products?
          <AppFlatList style={{width:'100%'}} numColumns={2} data={Data.Products[sectionID][subSectionsID]}
          renderItem={({item})=> <AppProductItem height={heightPixel(300)} item={item}/>}/>
          :
            this.billItem()}
          <View style={{height:'16%'}}/>
        </View>
      </View>
    );
  }
}

export default Products;
