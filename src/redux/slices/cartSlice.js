import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const updateTaste = createAsyncThunk('taste/updateTaste', async (params) => {
    const {id, taste} = params
    await axios.put(`http://127.0.0.1:8000/api/update_taste/${id}/`, taste)

})


const initialState = {
    name: '',
    surname: '',
    postal_code: '',
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setName(state, action){
            state.name = action.payload
        },
        setSurname(state, action){
            state.surname = action.payload
        },
        setPostal_Code(state, action){
            state.postal_code = action.payload
        },
    }
})

export const cartData = (state) => state.cart
export const {setName, setSurname, setPostal_Code} = cartSlice.actions

export default cartSlice.reducer