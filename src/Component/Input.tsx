import React from 'react';
import style from "./../App.module.css" ;
import {ChangeEvent} from 'react';
type InputPropsType={
    value:number
    callback: (value:number)=>void

}
export const Input = (props:InputPropsType) => {
    const onChangeHendler=(event: ChangeEvent<HTMLInputElement>)=>{
       // console.log(typeof(event.currentTarget.valueAsNumber))
        props.callback(event.currentTarget.valueAsNumber)

    }
    return (
        <div>
                <input type="number" onChange={onChangeHendler} className ={style.input} value={props.value}/>
        </div>
    );
};

