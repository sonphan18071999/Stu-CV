import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define the initial state
const initialState: string[] = [];

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    addLanguage: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeLanguage: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
    setLanguages: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { addLanguage, removeLanguage, setLanguages } =
  languagesSlice.actions;

// Selector
export const selectLanguages = (state: RootState) => state.languages;

export default languagesSlice.reducer;
