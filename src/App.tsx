import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from './Component/Scoreboard';
import {Settings} from "./Component/Settings";

export type StatusType = 'counter' | 'error' | "set"
//
function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [status, setStatus]=useState<StatusType>('counter')

    const increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
            console.log(count)

        }
    }
    const reset = () => {
        setCount(startValue)
    }

    const ChangeStartValue = (value: number) => {
         setStartValue(value)
         setStatus("set")
    }
    const ChangeMaxValue = (value: number) => {
        setMaxValue(value)
        setStatus("set")
    }
    return (
        <div className="App">
            <Scoreboard count={count}
                        startValue={startValue}
                        maxValue={maxValue}
                        increment={increment}
                        reset={reset}
                        status={status}
                        setStatus={setStatus}
                        setCount={setCount}/>

            <Settings count={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      ChangeStartValue={ChangeStartValue}
                      ChangeMaxValue={ChangeMaxValue}
                      status={status}
                      setStatus={setStatus}
                      setCount={setCount}
                      reset={reset}/>
        </div>
    );
}

export default App;
