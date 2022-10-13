import React from 'react';
import style from "./../App.module.css" ;
import {StatusType} from "../AppWithRedux";

type CounterPropsType = {
    count: number
    maxValue: number
}

export const Counter: React.FC<CounterPropsType> = ({count, maxValue}) => {

    return (

        <div className={count === maxValue ? style.error : style.white}>
            {count}
        </div>

)
                }
