import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./Slices/user.js";

export const store = configureStore({
  reducer: {
     user: userReducer,
    //  settings: settingsReducer
  },
});
