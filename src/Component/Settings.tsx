import React from 'react';
import style from "./../App.module.css" ;
import {Input} from "./Input";
import {Button} from "./Button";
type SettingsPropsType = {
    value: number
    startValue: number
    maxValue: number
    ChangeStartValue: (value: number)=>void
    ChangeMaxValue: (value: number)=> void
}
export const Settings = (props:SettingsPropsType) => {
    return (
        <div className={style.settings}>
            <div className={style.values}>
                <div className={style.flex}>
                    <div className={style.inputName}>
                        max value:
                    </div>
                    <div>
                        <Input value = {props.maxValue}
                               callback ={props.ChangeMaxValue}/>
                    </div>
                </div>
                <div className={style.flex}>
                    <div className={style.inputName}>
                        start value:
                    </div>
                    <div>
                        <Input value = {props.startValue} callback ={props.ChangeStartValue}/>
                    </div>
                </div>
            </div>
            <div>
               <Button name={"set"} callback={()=>{}}/>
            </div>
        </div>
    );
};
