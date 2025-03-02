import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import ticketReducer from "./ticketSlice"; 

const token = localStorage.getItem("token");
const user = JSON.parse(localStorage.getItem("user"));

const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
  },
  preloadedState: {
    auth: { user, token },
  },
});

export default store;