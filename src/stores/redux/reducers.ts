import { combineReducers } from "redux";

import ThemeReducer from "@redux/slices/themeReducer";
import postsSlice from "@redux/slices/postReducer";

const rootReducer = combineReducers({ ThemeReducer, posts: postsSlice });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
