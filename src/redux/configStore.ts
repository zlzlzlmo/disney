import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import user from "./modules/user";
import movies from "./modules/movies";
const store = configureStore({
  reducer: { user, movies },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;

export default store;
