import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchElfbars = createAsyncThunk('elfbars/fetchElfbarsStatus', async () => {
    const itemResp = await axios.get('http://127.0.0.1:8000/api/elfbar-list/')
    return itemResp.data
})


const initialState = {
    items: [],
    status: 'loading'
}


const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
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
export const {setItems} = cardSlice.actions

export default cardSlice.reducer