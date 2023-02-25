import { THEMES } from "@utils/constatns";
import { createSlice } from "@reduxjs/toolkit";

export type ThemeInitialStateType = {
    currentTheme: string;
};

const initialState: ThemeInitialStateType = {
    currentTheme: THEMES.LIGHT,
};

const ThemeReducer = createSlice({
    name: "currentTheme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            if (action.payload) {
                return {
                    ...state,
                    currentTheme: THEMES.LIGHT,
                };
            } else {
                return {
                    ...state,
                    currentTheme: THEMES.DARK,
                };
            }
        },
    },
});

export const { setTheme } = ThemeReducer.actions;

export default ThemeReducer.reducer;
