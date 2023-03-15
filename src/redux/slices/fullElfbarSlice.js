import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFullElf = createAsyncThunk('fullElfbar/fetchFullStatus', async (params) => {
    const {slug} = params
    const elfResp = await axios.get(`http://127.0.0.1:8000/api/product/${slug}/`)
    return elfResp.data

})

const initialState = {
    elfbar: [],
    status: 'loading',
    taste: 0
}

const elfSlice = createSlice({
    name: 'fullElfbar',
    initialState,
    reducers: {
        setElf(state, action){
            state.elfbar = action.payload
        }
    },
    extraReducers: {
        [fetchFullElf.pending]: (state) => {
            state.status = 'loading'
            state.elfbar = []
            state.taste = 0
        },
        [fetchFullElf.fulfilled]: (state, action) => {
            state.status = 'success'
            state.elfbar = action.payload
            state.taste = action.payload.taste.count_in_stock
        },
        [fetchFullElf.rejected]: (state) => {
            state.status = 'error'
            state.elfbar = []
            state.taste = 0
        }
    }
})

export const selectFullElf = (state) => state.fullElf


export default elfSlice.reducer