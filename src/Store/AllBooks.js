import Data from '../Data.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = Data;

const allBookSlice = createSlice({
    name:'allbook',
    initialState:initialState,
    reducers:{
        decrease:(state,action)=>{
            const id = state.findIndex(item => item.id === action.payload);
            state[id].noofcopies-=1;
        },
        increase:(state,action)=>{
            const id = state.findIndex(item => item.id === action.payload);
            state[id].noofcopies = 20;
        }
    }
})

export default allBookSlice.reducer;

export  const  {decrease,increase} = allBookSlice.actions;