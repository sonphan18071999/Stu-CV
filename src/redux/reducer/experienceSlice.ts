import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Experience from "../../models/Experience";

// Define the initial state
const initialState: Experience[] = [];

export const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action: PayloadAction<Experience>) => {
      state.push(action.payload);
    },
    updateExperience: (
      state,
      action: PayloadAction<{ index: number; experience: Experience }>
    ) => {
      const { index, experience } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = experience;
      }
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    setExperiences: (state, action: PayloadAction<Experience[]>) => {
      return action.payload;
    },
  },
});

export const {
  addExperience,
  updateExperience,
  removeExperience,
  setExperiences,
} = experienceSlice.actions;

// Selector
export const selectExperiences = (state: RootState) => state.experience;

export default experienceSlice.reducer;
