import { createSlice } from "@reduxjs/toolkit";


const movieDetailSlice = createSlice({
    name : "movieDetail",
    initialState : {
        movies : {},
        cast : {}
    },
    reducers : {
        addMovie : (state , action)=>{
           state.movies = action.payload
        },
        addCast : (state , action)=>{
            state.cast = action.payload
         }
    }
})

export const {addMovie , addCast} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;