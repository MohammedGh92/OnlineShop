import {INCREAMENT,DECREAMENT,INCBYAMOUNT,GETAPI} from "../actions/types"

const counterReducer = (state ={count:1,user:''},action)=>{
  switch (action.type) {
    case INCREAMENT:
      return {...state,count:state.count+1}
    case DECREAMENT:
      return {...state,count:state.count-1}
    case INCBYAMOUNT:
      return {...state,count:state.count+action.amount}
    case GETAPI:
      return {...state,count:action.data}
    default:return state
  }
}

export default counterReducer
