import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import UserInformation from "../../models/UserInformation";

// Define the initial state using that type
const initialState: UserInformation = {
  avatar: "",
  firstName: "",
  lastName: "",
  title: "",
  email: "",
  phone: "",
};
// highlight-end

export const userInformationSlice = createSlice({
  name: "userInformation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserInformation: (state, action: PayloadAction<UserInformation>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserInformation } = userInformationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserInformation = (state: RootState) =>
  state.userInformation;

export default userInformationSlice.reducer;
