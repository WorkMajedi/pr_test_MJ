import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { Post } from "src/types/posts";
import Link from "next/link";

type PostCardProps = {
    post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
    const date = post.date && new Date(post.date).toDateString();
    return (
        <Link href={`post/${post.id}`} passHref>
            <Card
                sx={{
                    height: 230,
                    overflowY: "auto",
                    mb: 1,
                }}
            >
                <CardHeader title={post.title} />
                <CardContent>
                    <Typography variant="body1">{post.body}</Typography>
                    <Typography variant="body1">
                        {post?.date && date}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PostCard;
