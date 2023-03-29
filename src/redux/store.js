import {configureStore} from "@reduxjs/toolkit";
import card from './slices/cardSlice'
import filter from './slices/filterSlice'
import fullElf from './slices/fullElfbarSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        card,
        filter,
        fullElf,
        cart,
    }
})