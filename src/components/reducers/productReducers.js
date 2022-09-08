import { createReducer} from "@reduxjs/toolkit";
import { LOAD_PRODUCTS,CREATE_PRODUCT} from "../constants/constants";


const reducer = createReducer({}, (builder) => {
    builder
      .addCase(LOAD_PRODUCTS, (state, payload) => {
        state = payload.action

        return state
      })

      .addCase(CREATE_PRODUCT, (state, payload) => {
        state = payload.action
        return state
      })
  })

  export default reducer;
  