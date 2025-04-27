import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SocialLinks {
  facebook: string;
  linkedin: string;
  email: string;
}

// Define the initial state
const initialState: SocialLinks = {
  facebook: "",
  linkedin: "",
  email: "",
};

export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    updateSocialLink: (
      state,
      action: PayloadAction<{ field: keyof SocialLinks; value: string }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setSocialLinks: (state, action: PayloadAction<SocialLinks>) => {
      return action.payload;
    },
  },
});

export const { updateSocialLink, setSocialLinks } = socialSlice.actions;

// Selector
export const selectSocialLinks = (state: RootState) => state.social;

export default socialSlice.reducer;
