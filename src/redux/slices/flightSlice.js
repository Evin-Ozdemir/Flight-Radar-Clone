import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/index";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  // asenkron aksiyonlar burda:
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFlights.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.payload;
    });
    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.flights = action.payload;
    });
  },
});

export default flightSlice.reducer;
