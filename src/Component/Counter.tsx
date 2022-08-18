import React from 'react';
import style from "./../App.module.css" ;
type CounterPropsType = {
    value: number
    maxValue: number
}

export const Counter: React.FC<CounterPropsType> = ({value, maxValue}) => {

    return (
        <div className={value === maxValue ? style.red : style.white}>{value}</div>
    )
}
