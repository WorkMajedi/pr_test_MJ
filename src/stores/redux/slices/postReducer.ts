import { AppThunk } from "@redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "@services/postsService";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { setPosts, setLoading, setError } = postsSlice.actions;

export const fetchPostsAsync = (): AppThunk | any => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await getPosts();
        dispatch(setPosts(response));
    } catch (error: any) {
        dispatch(setError(error.message));
    }
    dispatch(setLoading(false));
};

export default postsSlice.reducer;
