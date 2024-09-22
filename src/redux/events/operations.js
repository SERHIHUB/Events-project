import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
  baseURL: " https://events-registration-app-ncm1.onrender.com",
});

export const fetchEvents = createAsyncThunk(
  "events/fetchAllEvents",
  async ({ page, perPage }, thunkAPI) => {
    try {
      const response = await instance.get("/events/", {
        params: {
          page,
          perPage,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchParticipants = createAsyncThunk(
  "events/fetchAllUsers",
  async (eventId, thunkAPI) => {
    try {
      const response = await instance.get(`/events/${eventId}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "events/addUser",
  async ({ eventId, credentials }, thunkAPI) => {
    try {
      const addUser = await instance.patch(`/events/${eventId}`, credentials);

      return addUser.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
