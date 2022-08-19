import React from 'react';
import style from "./../App.module.css" ;
import {Input} from "./Input";
import {Button} from "./Button";
import {StatusType} from "../App";
type SettingsPropsType = {
    count: number
    startValue: number
    maxValue: number
    ChangeStartValue: (value: number)=>void
    ChangeMaxValue: (value: number)=> void
    status: StatusType
    setStatus: (status: StatusType)=> void
    setCount: (count: number)=>void
    reset: ()=> void
}
export const Settings = (props:SettingsPropsType) => {
    if (props.startValue > props.maxValue || props.startValue < 0 || props.startValue === props.maxValue)  {
        props.setStatus("error")
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
               <Button name={"set"} callback={()=>props.setStatus('counter')} disabled={props.status === "error" ? true : false} setCount={props.setCount} count={props.count} reset={props.reset}/>
            </div>
        </div>
    );
};
