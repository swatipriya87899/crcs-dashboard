import { createSlice } from "@reduxjs/toolkit";

const appInfoSlice = createSlice({
  name: "counter",
  initialState: { selectedOption: [] },
  reducers: {
    selectOptions(state, { payload }) {
       state.selectedOption.push(payload);
    },
    removeOptions (state,{payload}) {
      state.selectedOption = state.selectedOption.filter((option) => option !== payload);
    },
  },
});

export const { selectOptions, decrement,removeOptions } = appInfoSlice.actions;
export default appInfoSlice.reducer;
