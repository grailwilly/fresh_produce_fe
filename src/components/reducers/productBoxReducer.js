import { createReducer } from "@reduxjs/toolkit";
import { SET_BOX_DATA, INCREASE_QUANTITY, DECREASE_QUANTITY,UPDATE_QTY } from "../constants/constants";


const reducer = createReducer({}, (builder) => {
  builder


    .addCase(SET_BOX_DATA, (state, payload) => {
      const setData = payload.action.map(e => {
        return { ...e,qty:0}
      })
      state = setData
      return state
    })



    .addCase(INCREASE_QUANTITY, (state, payload) => {
      const box = state.find(e => e.id === payload.action)
      box.qty += 1
      return state

    })

    .addCase(DECREASE_QUANTITY, (state, payload) => {
      const box = state.find(e => e.id === payload.action)
      if (box.qty > 1) {
        box.qty -= 1
      } else {
        box.qty = 0
      }
      return state
    })


    .addCase(UPDATE_QTY, (state, payload) => {
      const box = state.find(e => e.id === payload.action.id)
      box.qty = +payload.action.value
    })
})

export default reducer;
