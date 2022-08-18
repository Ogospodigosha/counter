import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from './Component/Scoreboard';
import {Settings} from "./Component/Settings";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const increment = () => {
        if (count < maxValue) {
            setCount(count + 1)

        }
    }
    const reset = () => {
        setCount(startValue)
    }
    const setToLocalStorage = () => {
        localStorage.setItem("counterValue", JSON.stringify(count))
    }
    const getToLocalStorage = () => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }
    const ChangeStartValue = (value: number) => {

         setStartValue(value)
        console.log(value)
    }
    const ChangeMaxValue = (value: number) => {
        setMaxValue(value)
         console.log(value)
    }
// нужно реализовать хранения стартвелью и максвэлью в локал сторедже
    // нужно реализовать следующее: при вводе значения в инпут для стартвелью или макс вэлью эти переменные должны перезаписываться
    return (
        <div className="App">
            <Scoreboard value={count}
                        startValue={startValue}
                        maxValue={maxValue}
                        increment={increment}
                        reset={reset}/>
            <Settings value={count}
                      startValue={startValue}
                      maxValue={maxValue}
                      ChangeStartValue={ChangeStartValue}
                      ChangeMaxValue={ChangeMaxValue}/>
            {/*<button onClick={setToLocalStorage}>setToLocalStorage</button>*/}
            {/*<button onClick={getToLocalStorage}>getToLocalStorage</button>*/}
        </div>
    );
}

export default App;
