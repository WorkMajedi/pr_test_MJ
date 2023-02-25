import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { css } from "@emotion/react";
import PostCard from "@components/PostCard";
import { fetchPostsAsync } from "@redux/slices/postReducer";
import { Loading } from "@components";

const errorStyle = css`
    margin: 24px auto;
    text-align: center;
`;

const Home = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, error } = useSelector(
        (state: any) => state.posts,
    );
    useEffect(() => {
        dispatch(fetchPostsAsync());
    }, [dispatch]);

    return (
        <Box sx={{ padding: 3 }}>
            <Typography
                variant="h3"
                component="h1"
                sx={{ textAlign: "center", marginBottom: 3 }}
            >
                Dark Mode & Post
            </Typography>
            {error && (
                <Box css={errorStyle}>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ color: "red" }}
                    >
                        Error: {error}
                    </Typography>
                </Box>
            )}
            {isLoading ? (
                <Loading />
            ) : (
                <Grid container spacing={3}>
                    {posts.map((post) => (
                        <Grid key={post.id} item xs={12} sm={6} md={4}>
                            <LazyLoad
                                // @ts-ignore

                                placeholder={
                                    <Box sx={{ width: 300 }}>
                                        <Skeleton />
                                        <Skeleton animation="wave" />
                                        <Skeleton animation={false} />
                                    </Box>
                                }
                            >
                                <PostCard post={post} />
                            </LazyLoad>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default Home;
