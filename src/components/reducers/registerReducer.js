import { createReducer} from "@reduxjs/toolkit";
import { REGISTER_USER } from "../constants/constants";


const registerReducer = createReducer({}, (builder) => {
    builder
      .addCase(REGISTER_USER, (state, payload) => {
        state = payload.action
          return state
      
      })
  })

  export default registerReducer;