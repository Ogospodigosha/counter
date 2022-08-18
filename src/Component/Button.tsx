import React from 'react';
import style from "./../App.module.css" ;
type ButtonPropsType = {
    name: string
    callback: ()=> void
    disabled?: boolean
}
export const Button = (props:ButtonPropsType ) => {
    const onClickHendler=()=>{
        props.callback()
    }
    return (
        <button className={style.button} disabled={props.disabled} onClick={onClickHendler}>{props.name}</button>
    );
};

