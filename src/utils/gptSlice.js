import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false
    },
    reducers : {
        toggler : (state)=>{
            state.showGptSearch =  !state.showGptSearch
        }
    }
})

export const {toggler} = gptSlice.actions;
export default gptSlice.reducer;