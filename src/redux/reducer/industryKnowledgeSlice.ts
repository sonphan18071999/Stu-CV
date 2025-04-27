import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Define the initial state
const initialState: string[] = [];

export const industryKnowledgeSlice = createSlice({
  name: "industryKnowledge",
  initialState,
  reducers: {
    addKnowledge: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    removeKnowledge: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
    setKnowledges: (state, action: PayloadAction<string[]>) => {
      return action.payload;
    },
  },
});

export const { addKnowledge, removeKnowledge, setKnowledges } =
  industryKnowledgeSlice.actions;

// Selector
export const selectIndustryKnowledge = (state: RootState) =>
  state.industryKnowledge;

export default industryKnowledgeSlice.reducer;
