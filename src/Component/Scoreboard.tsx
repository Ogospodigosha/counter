import React from 'react';
import {Button} from "./Button";
import {Counter} from "./Counter";
import style from "./../App.module.css";
import {StatusType} from "../AppWithRedux";
import { useDispatch } from 'react-redux';
export type ScoreboardPropsType = {
    count: number
    startValue: number
    maxValue: number
    increment: () => void
    status: StatusType
}
export const Scoreboard = (props:ScoreboardPropsType) => {
    const dispatch = useDispatch()
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
                <Counter count={props.count} maxValue={props.maxValue} />}
            </div>
            <div className={style.buttons}>
                <div>
                    <Button name={'INC'}
                            callback={props.increment}
                            // disabled={props.count === props.maxValue} setCount={props.setCount} count={props.count} reset={props.reset}/>
                            disabled={props.count === props.maxValue} count={props.count} />

                </div>
                <div>
                    <Button name={'RESET'}
                            callback={()=>{dispatch({type:'RESET'})}}  count={props.count}

                            />
                </div>
            </div>
        </div>
    )
}

