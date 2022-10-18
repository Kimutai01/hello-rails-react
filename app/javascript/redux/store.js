import { configureStore } from "@reduxjs/toolkit";

import greetReducer from "./greetingSlice";

const store = configureStore({
  reducer: {
    greeting: greetReducer,
  },
});

export default store;
