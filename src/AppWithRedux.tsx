import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {Scoreboard} from './Component/Scoreboard';
import {Settings} from "./Component/Settings";
import {ChangeMaxValueAC, ChangeStartValueAC, StateType} from "./state/reducer";


export type StatusType = 'counter' | 'error' | "set"

function AppWithRedux() {
    const dispatch = useDispatch()
    const count: number = useSelector<StateType, number>(state => state.count)
    const status: StatusType = useSelector<StateType, StatusType>(state => state.status)
    const maxValue: number = useSelector<StateType, number>(state => state.maxValue)
    const startValue: number = useSelector<StateType, number>(state => state.startValue)


    const increment = () => {
         dispatch({type: "INCREMENT"})
    }


    const ChangeStartValue = (value: number, status: StatusType) => {
        dispatch(ChangeStartValueAC(value, status))
    }
    const ChangeMaxValue = (value: number, status: StatusType ) => {
        dispatch(ChangeMaxValueAC(value, status))
    }
    return (
        <div className="App">
            <Scoreboard count={count}
                        startValue={startValue}
                        maxValue={maxValue}
                        increment={increment}
                        status={status}
            />

            <Settings count={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      ChangeStartValue={ChangeStartValue}
                      ChangeMaxValue={ChangeMaxValue}
                      status={status}/>
        </div>
    );
}

export default AppWithRedux;
