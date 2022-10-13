import {StatusType} from "../AppWithRedux";

export type StateType = {
    startValue: number
    maxValue: number
    count: number
    status: StatusType
}
export type ActionType =IncrementType | ResetType | ChangeStartValue | ChangeMaxValue | ErrorType | EnableCountStatusType
type IncrementType = {
    type: "INCREMENT"
}
type ResetType = {
    type: "RESET"
}
type ChangeStartValue ={
    type: 'CHANGE-START-VALUE'
    value: number
    status: StatusType
}
type ChangeMaxValue = {
    type: 'CHANGE-MAX-VALUE'
    value: number
    status: StatusType
}
type ErrorType ={
    type: 'ERROR'
    status: StatusType
}
type EnableCountStatusType ={
    type: 'ENABLE-COUNT-STATUS'
    status: StatusType
}
const initialState = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    status: 'counter' as const
}

export const reducer =(state: StateType = initialState, action:ActionType)=>{

    switch (action.type){
        case "INCREMENT":
            if(state.count < state.maxValue){
                return {...state, count: state.count + 1}
            }else {
                return state
            }
        case "RESET":
            return {...state, count: state.startValue}
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.value, status: action.status}
        case "CHANGE-MAX-VALUE":
            return  {...state, maxValue:  action.value, status: action.status}
        case "ERROR":
            if (state.startValue > state.maxValue || state.startValue < 0 || state.startValue === state.maxValue)  {
                return {...state, status: action.status}
            } else {
                return state
            }
        case 'ENABLE-COUNT-STATUS':
            return {...state, status: action.status}


        default:
            return  state
    }
}
export const ChangeStartValueAC=(value:number, status: StatusType):ChangeStartValue=>{
   return {type: "CHANGE-START-VALUE", value, status}
}
export const ChangeMaxValueAC =(value: number, status: StatusType):ChangeMaxValue=>{
    return {type:"CHANGE-MAX-VALUE", value, status}
}
export const ErrorAC =(status: StatusType):ErrorType=>{
    return {type:"ERROR", status}
}
export const  EnableCountStatusAC =(status: StatusType): EnableCountStatusType=>{
    return {type:"ENABLE-COUNT-STATUS", status}
}