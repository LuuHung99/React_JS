import counterSlice from "../Redux/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  counter: counterSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
