import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'noOfreducer',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            const id = state.items.findIndex(item => item.id === action.payload.id);
            if(id<0){
                const val = {id:action.payload.id,title:action.payload.title,author:action.payload.author,year:action.payload.year,noofcopies:1}
                state.items.push(val);
            }else{
                state.items[id].noofcopies+=1;
            }
        },
        removeItem:(state,action)=>{
            const datas = state.items.filter(item => item.id !== action.payload);
            state.items = datas;
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions

export default cartSlice.reducer;