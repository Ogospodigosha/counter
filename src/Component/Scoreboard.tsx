import React from 'react';
import {Button} from "./Button";
import {Counter} from "./Counter";
import style from "./../App.module.css";
export type ScoreboardPropsType = {
    value: number
    startValue: number
    maxValue: number
    increment: () => void
    reset: () => void
}
export const Scoreboard = (props:ScoreboardPropsType) => {
    return (
        <div className={style.scoreboard}>
            <div className={style.counter}>
                <Counter value={props.value} maxValue={props.maxValue}/>
            </div>
            <div  className={style.buttons}>
                <div>
                    <Button name={'INC'}
                            callback={props.increment}
                            disabled={props.value === props.maxValue}/>
                </div>
                <div>
                    <Button name={'RESET'}
                            callback={props.reset}
                            />
                </div>
            </div>
        </div>
    )
}

