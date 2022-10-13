import {ChangeMaxValueAC, ChangeStartValueAC, reducer} from "./reducer";

test('count should be increase',()=>{
    const initialState = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        status: 'counter' as const
    }
    const endState = reducer(initialState, {type:'INCREMENT'})
    expect(endState.count).toBe(initialState.count + 1)
})
test('count should be reset with start value',()=>{
    const initialState = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        status: 'counter' as const
    }
    const endState = reducer(initialState, {type:'RESET'})
    expect(endState.count).toBe(initialState.startValue)
})
test('start value should be changed',()=>{
    const initialState = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        status: 'counter' as const
    }
    const endState = reducer(initialState, ChangeStartValueAC(1, 'set'))
    expect(endState.startValue).toBe(1)
    expect(endState.status).toBe('set')

})
test('max value should be changed',()=>{
    const initialState = {
        startValue: 0,
        maxValue: 5,
        count: 0,
        status: 'counter' as const
    }
    const endState = reducer(initialState, ChangeMaxValueAC(1, 'set'))
    expect(endState.maxValue).toBe(1)
    expect(endState.status).toBe('set')

})
