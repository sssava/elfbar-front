import {configureStore} from "@reduxjs/toolkit";
import card from './slices/cardSlice'
import filter from './slices/filterSlice'

export const store = configureStore({
    reducer: {
        card,
        filter,
    }
})