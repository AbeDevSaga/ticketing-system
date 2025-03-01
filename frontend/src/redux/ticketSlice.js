import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch tickets
export const fetchTickets = createAsyncThunk("tickets/fetchTickets", async (_, { getState }) => {
  const { token } = getState().auth;
  const res = await axios.get("/api/tickets", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

// Async thunk to create a ticket
export const createTicket = createAsyncThunk("tickets/createTicket", async (ticketData, { getState }) => {
  const { token } = getState().auth;
  const res = await axios.post("/api/tickets", ticketData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

const ticketSlice = createSlice({
  name: "tickets",
  initialState: { tickets: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tickets = action.payload;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.tickets.push(action.payload);
      });
  },
});

export default ticketSlice.reducer;