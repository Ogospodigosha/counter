import React from 'react';
import style from "./../App.module.css" ;
import {StatusType} from "../App";

type CounterPropsType = {
    count: number
    maxValue: number
    status: StatusType
    startValue: number
    setCount: (value: number)=>void
}

export const Counter: React.FC<CounterPropsType> = ({count, maxValue, status, startValue, setCount }) => {

    return (

        <div className={count === maxValue ? style.error : style.white}>
            {count}
        </div>

)
                }
