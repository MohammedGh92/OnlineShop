import {INCREAMENT,DECREAMENT,INCBYAMOUNT,GETAPI} from './types';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const increamentAction =async(dispach)=>{return dispach({type:INCREAMENT})}
export const decreamentAction =async(dispach)=>{return dispach({type:DECREAMENT})}
export const incByAmountAction =async(amount,dispach)=>{return dispach({type:INCBYAMOUNT,amount:amount})}

export const getAPIAction =async(dispach)=>{
  let url= "https://facebook.github.io/react-native/movies.json"
  let result =fetch(url).then((data)=>{
  data.json().then((dataJson)=>{
   return dispach({
           type: GETAPI,
           data: dataJson,
   })
  })
  })
}
