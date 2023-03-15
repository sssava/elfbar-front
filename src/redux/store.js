import {configureStore} from "@reduxjs/toolkit";
import card from './slices/cardSlice'
import filter from './slices/filterSlice'
import fullElf from './slices/fullElfbarSlice'

export const store = configureStore({
    reducer: {
        card,
        filter,
        fullElf,
    }
})