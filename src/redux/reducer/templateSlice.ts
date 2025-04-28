import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TemplateType = "modern" | "classic" | "professional" | "creative";

interface TemplateState {
  selectedTemplate: TemplateType;
}

const initialState: TemplateState = {
  selectedTemplate: "modern",
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<TemplateType>) => {
      state.selectedTemplate = action.payload;
    },
  },
});

export const { setTemplate } = templateSlice.actions;

export default templateSlice.reducer;
