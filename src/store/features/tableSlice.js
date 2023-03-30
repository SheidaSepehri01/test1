import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 clickedBlock:''
};

export const tableSlice = createSlice({
    name:'table',
    initialState,
    reducers:{
        clicked:(state , action)=>{
            state.clickedBlock = action.payload + 1
        }
    }
})

export const {clicked} = tableSlice.actions
export default tableSlice.reducer