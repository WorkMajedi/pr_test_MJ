import { Post } from "../types/posts";
import api from "../api";

// Get posts from the API

export const getPosts = async (): Promise<Post[]> => {
    const res = await api.get<Post[] | any>("/posts");

    // Assign date based on post id

    const sortedPosts =
        res.data &&
        res?.data?.length > 0 &&
        res.data.map((post) => ({
            ...post,
            date: new Date(Date.now() - post.id * 10000000).toISOString(),
        }));
    return sortedPosts;
};
export const getSinglePost = async (postID): Promise<Post[]> => {
    const res = await api.get<Post | any>(`/posts/${postID}`);

    // Assign date based on post id

    const post = res.data && {
        ...res.data,
        date: new Date(Date.now() - res.data.id * 10000000).toISOString(),
    };
    return post;
};
