import React from 'react';
import style from "./../App.module.css" ;
import {Input} from "./Input";
import {Button} from "./Button";
import {StatusType} from "../AppWithRedux";
import { useDispatch } from 'react-redux';
import {EnableCountStatusAC, ErrorAC} from "../state/reducer";
type SettingsPropsType = {
    count: number
    startValue: number
    maxValue: number
    ChangeStartValue: (value: number, status: StatusType)=>void
    ChangeMaxValue: (value: number, status: StatusType )=> void
    status: StatusType
}
export const Settings = (props:SettingsPropsType) => {

    const dispatch = useDispatch()
    if (props.startValue > props.maxValue || props.startValue < 0 || props.startValue === props.maxValue)  {
        dispatch(ErrorAC('error'))
    }
    const reset = ()=>{
        dispatch({type:'RESET'})
    }
    return (
        <div className={style.settings}>
            <div className={style.values}>
                <div className={style.flex}>
                    <div className={style.inputName}>
                        max value:
                    </div>
                    <div>
                        <Input value = {props.maxValue}
                               callback ={props.ChangeMaxValue} error={props.status === "error" ? true : false}/>
                    </div>
                </div>
                <div className={style.flex}>
                    <div className={style.inputName}>
                        start value:
                    </div>
                    <div>
                        <Input value = {props.startValue}
                               callback ={props.ChangeStartValue}
                               error ={props.status === "error" ? true : false}/>
                    </div>
                </div>
            </div>
            <div>
               <Button name={"set"} callback={()=>{dispatch(EnableCountStatusAC('counter'))}} disabled={props.status === "error" ? true : false}  count={props.count} reset={reset}/>
            </div>
        </div>
    );
};
