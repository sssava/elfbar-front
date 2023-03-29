import {createSlice} from "@reduxjs/toolkit";


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
        }
    }
})

export const cartData = (state) => state.cart
export const {setName, setSurname, setPostal_Code} = cartSlice.actions

export default cartSlice.reducer