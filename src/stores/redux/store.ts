import { Action, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import ThemeReducer from "@redux/slices/themeReducer";
import postsSlice from "@redux/slices/postReducer";

import { ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        theme: ThemeReducer,
        posts: postsSlice,
    },

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(""),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
export default store;
