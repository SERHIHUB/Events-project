import { createSlice, createAction } from "@reduxjs/toolkit";
import { fetchEvents, fetchParticipants, registerUser } from "./operations";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    items: [],
    // users: [],
    newUser: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload.data);
        state.items = action.payload.data.allEvents;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchParticipants.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        // state.newUser = action.payload;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const eventsReducer = eventSlice.reducer;
