import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : "movies",
    initialState : {},
    reducers : {
        addNowPlayingMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action)=>{
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTopRatedMovies , addUpcomingMovies , addTrailerVideo, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;