import React from 'react';
import {Button} from "./Button";
import {Counter} from "./Counter";
import style from "./../App.module.css";
import {StatusType} from "../App";
export type ScoreboardPropsType = {
    count: number
    startValue: number
    maxValue: number
    increment: () => void
    reset: () => void
    status: StatusType
    setStatus: (status: StatusType)=> void
    setCount: (value: number)=>void

}
export const Scoreboard = (props:ScoreboardPropsType) => {
    return (
        <div className={style.scoreboard}>
            <div className={style.counter}>
                {props.status === 'error' ?
                    <div className={style.error}>
                        Incorrect value!
                    </div> :
                    props.status === 'set' ?
                        <div className={style.white}>
                            Enter values and press "SET"
                        </div> :
                <Counter count={props.count} maxValue={props.maxValue} status ={props.status} startValue={props.startValue} setCount={props.setCount}/>}
            </div>
            <div className={style.buttons}>
                <div>
                    <Button name={'INC'}
                            callback={props.increment}
                            disabled={props.count === props.maxValue} setCount={props.setCount} count={props.count} reset={props.reset}/>
                </div>
                <div>
                    <Button name={'RESET'}
                            callback={props.reset} setCount={props.setCount} count={props.count} reset={props.reset}
                            />
                </div>
            </div>
        </div>
    )
}

