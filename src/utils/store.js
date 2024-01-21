import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptSlice'
import searchReducer from './searchSlice'
import movieDetailReducer from './movieDetailSlice'

const store = configureStore({
    reducer :{
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        search : searchReducer,
        movieDetail : movieDetailReducer
    }
})

export default store;