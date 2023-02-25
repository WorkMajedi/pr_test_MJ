import { GetServerSideProps } from "next";
import React from "react";
import { PostDetail } from "src/screens";
import { getSinglePost } from "@services/postsService";

const Post: React.FC = (props) => {
    return (
        <>
            <PostDetail {...props} />
        </>
    );
};
export default Post;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { slug: postId } = ctx.query;
    const post = await getSinglePost(postId);
    console.log(post, "--  post --");

    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
};
