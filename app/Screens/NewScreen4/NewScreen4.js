import React from 'react'
import { View } from 'react-native';
import { NewScreenForm } from './Components/'

export default function NewScreen4() {

  const onSubmit = data => {
    console.log(data);
  };


  return (
    <View>
      <NewScreenForm onSubmit={onSubmit} />
    </View>
  );

}