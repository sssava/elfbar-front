import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    sort: {
        name: 'Немає сортування',
        sortProperty: '-taste__count_in_stock',
        type: 'ordering'
    }
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearchValue(state, action){
            state.searchValue = action.payload
        },
        setSort(state, action){
            state.sort = action.payload
        }
    }
})

export const selectSort = (state) => state.filter
export const {setSearchValue, setSort} = filterSlice.actions

export default filterSlice.reducer