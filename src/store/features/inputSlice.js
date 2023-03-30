import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  start: false,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setValue:(state, action)=>{
      state.value = action.payload
    },
    reset: (state) => {
      state.value = 0;
    },
    start: (state,action) => {
      state.start = action.payload;
    },
  
  },
});

export const  {reset, start, setValue} =inputSlice.actions
export default inputSlice.reducer;
