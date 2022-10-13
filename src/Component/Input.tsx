import React from 'react';
import style from "./../App.module.css" ;
import {ChangeEvent} from 'react';
import {StatusType} from "../AppWithRedux";
type InputPropsType={
    value:number
    callback: (value:number, status: StatusType)=>void
    error?: boolean;

}
export const Input = (props:InputPropsType) => {

    const onChangeHendler=(event: ChangeEvent<HTMLInputElement>)=>{
        props.callback(event.currentTarget.valueAsNumber, 'set')
    }
    return (
        <div>
                <input type="number"  onChange={onChangeHendler} className ={`${style.input}  ${props.error ? style.errorInput : ""}`} value={props.value}/>
        </div>
    );
};


