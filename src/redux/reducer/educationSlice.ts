import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Education from "../../models/Education";

// Define the initial state
const initialState: Education[] = [];

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action: PayloadAction<Education>) => {
      state.push(action.payload);
    },
    updateEducation: (
      state,
      action: PayloadAction<{ index: number; education: Education }>
    ) => {
      const { index, education } = action.payload;
      if (index >= 0 && index < state.length) {
        state[index] = education;
      }
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload);
    },
    setEducations: (state, action: PayloadAction<Education[]>) => {
      return action.payload;
    },
  },
});

export const { addEducation, updateEducation, removeEducation, setEducations } =
  educationSlice.actions;

// Selector
export const selectEducations = (state: RootState) => state.education;

export default educationSlice.reducer;
