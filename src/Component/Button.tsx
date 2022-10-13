import React from 'react';
import style from "./../App.module.css" ;
type ButtonPropsType = {
    name: string
    callback: ()=> void
    disabled?: boolean
    count: number
    reset?: ()=>void
}
export const Button = (props:ButtonPropsType ) => {

    const onClickHendler=()=>{
         props.reset?.()
        props.callback()

    }
    return (
        <button className={style.button} disabled={props.disabled} onClick={onClickHendler}>{props.name}</button>
    );
};

