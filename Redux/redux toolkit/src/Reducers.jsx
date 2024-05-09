import { createAction,createReducer } from "@reduxjs/toolkit";

const increement = createAction('increement')
const decreement = createAction('decreement')
const increementByValue = createAction('increementByValue')
const initialState = {
    c:0,
}
export const customReducer = createReducer(initialState,(builder)=>{
    builder
      .addCase(increement,(state,action)=>{
        state.c+=1;
      })
      .addCase(decreement,(state,action)=>{
        state.c-=1;
      })
      .addCase(increementByValue,(state,action)=>{
        state.c+=action.payload;
      })
});
    