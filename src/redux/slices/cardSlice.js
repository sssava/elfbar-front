import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchElfbars = createAsyncThunk('elfbars/fetchElfbarsStatus', async (params) => {
    const {ordering, charge} = params
    const itemResp = await axios.get(`http://127.0.0.1:8000/api/elfbar-list/${ordering}${charge}`)
    return itemResp.data
})


const initialState = {
    items: [],
    status: 'loading',
    storage: JSON.parse(localStorage.getItem("elfbars")) || [],
}


const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
        },
        setStorage(state, action){
            const findItem = state.storage.find((obj) => obj.id === action.payload.id)

            if (findItem){
                findItem.quantity++
            }else {
                state.storage.push({...action.payload, quantity: 1})
            }
        },
        addToCartByQuantity(state, action){
            console.log(action.payload)
            const findItem = state.storage.find((obj) => obj.id === action.payload.payload.id)
            if (!findItem){
                state.storage.push({
                    ...action.payload.payload.elf,
                    quantity: action.payload.payload.quan

                })
            }

        },
        setQuan(state, action){
            const findItem = state.storage.find((obj) => obj.id === action.payload.payload.itemId)

            if (findItem){
                findItem.quantity = Number.parseInt(action.payload.payload.newQuan)

            }
        },
        setPlusQuan(state, action){
            const findItem = state.storage.find((obj) => obj.id === action.payload.payload.itemId)

            if (findItem){
                findItem.quantity++


            }
        },
        setMinusQuan(state, action) {
            const findItem = state.storage.find((obj) => obj.id === action.payload.payload.itemId)

            if (findItem) {
                findItem.quantity--
            }
        },
        removeFromStorage(state, action){
            state.storage = state.storage.filter((obj) => obj.id !== action.payload)
        },
        clearStorage(state, action){
            state.storage = action.payload
        }
    },

    extraReducers: {
        [fetchElfbars.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchElfbars.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchElfbars.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        }
    }
})

export const selectCardData = (state) => state.card
export const {setStorage, setPlusQuan, setMinusQuan, setQuan, removeFromStorage, clearStorage, addToCartByQuantity} = cardSlice.actions

export default cardSlice.reducer