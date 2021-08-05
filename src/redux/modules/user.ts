import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configStore";
type UserStateValue = string | null | undefined;

export interface UserState {
  name: UserStateValue;
  email: UserStateValue;
  photo: UserStateValue;
}
const initialState: UserState = {
  name: null,
  email: null,
  photo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserPhoto = (state: RootState) => state.user.photo;

export default userSlice.reducer;
