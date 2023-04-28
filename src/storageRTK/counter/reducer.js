import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    show: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {   // counter/increment
            console.log('increment action.payload', action.payload);
            state.value += action.payload;
        },
        decrement(state, action) {
            console.log('decrement action.payload', action.payload);
            state.value -= action.payload;
        },
        changeView(state) {
            state.show = !state.show;
        }
    }
})

console.log(counterSlice);

export const { increment, decrement, changeView } = counterSlice.actions;

export default counterSlice.reducer;