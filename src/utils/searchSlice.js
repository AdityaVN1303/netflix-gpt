import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name : "search",
    initialState : {
        movies : []
    },
    reducers : {
        addSearch : (state , action)=>{
           state.movies = action.payload
        }
    }
})

export const {addSearch} = searchSlice.actions;
export default searchSlice.reducer;