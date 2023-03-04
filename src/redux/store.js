import {configureStore} from "@reduxjs/toolkit";
import card from './slices/cardSlice'

export const store = configureStore({
    reducer: {
        card,
    }
})