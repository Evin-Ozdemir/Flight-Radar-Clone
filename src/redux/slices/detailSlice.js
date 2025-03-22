import { createSlice } from "@reduxjs/toolkit";
import { getDetails } from "../actions";

const initialState = {
  detailId: null,
  isLoading: false,
  error: null,
  info: null,
  route: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  // senkron aksiyonlar burda:
  reducers: {
    open: (state, action) => {
      state.detailId = action.payload;
    },
    close: (state) => {
      state.detailId = null;
    },
    clearRoute: (state) => {
      state.route = [];
    },
  },
  // asenkron aksiyonlar burda:
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.payload;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.info = action.payload;
      state.route = action.payload.trail;
    });
  },
});

export const { open, clearRoute, close } = detailSlice.actions;
export default detailSlice.reducer;
