import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name:"navbarSlice",
  initialState :0,
  reducers:{
    switchState:(state,action)=>{
      return state = action.payload
    }
  }
})


export const {switchState} = navbarSlice.actions
export default navbarSlice.reducer