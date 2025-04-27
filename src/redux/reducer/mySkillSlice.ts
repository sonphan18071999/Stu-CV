import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Skill {
  name: string;
  url: string;
}

// Define the initial state
const initialState: Skill[] = [];

export const mySkillSlice = createSlice({
  name: "mySkill",
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<Skill>) => {
      state.push(action.payload);
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      return state.filter((skill) => skill.name !== action.payload);
    },
    setSkills: (state, action: PayloadAction<Skill[]>) => {
      return action.payload;
    },
  },
});

export const { addSkill, removeSkill, setSkills } = mySkillSlice.actions;

// Selector
export const selectMySkills = (state: RootState) => state.mySkill;

export default mySkillSlice.reducer;
