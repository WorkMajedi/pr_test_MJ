import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Post } from "../../types/posts";

interface IProps {
    post: Post;
}
export const DetailPost: FC<IProps> = ({ post }) => {
    return (
        <>
            <Box sx={{ mt: 5, width: "70%" }}>
                <Typography variant="h4" sx={{ mt: 5 }}>
                    {post.title}
                </Typography>
                <Typography
                    sx={{ mt: 5 }}
                    variant="subtitle1"
                    color="textSecondary"
                >
                    {post.date && new Date(post.date).toDateString()}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mt: 5,
                        width: "70%",
                        textAlign: "justify",
                    }}
                >
                    {post.body}
                </Typography>
            </Box>
        </>
    );
};
