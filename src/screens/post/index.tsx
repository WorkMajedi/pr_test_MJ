import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { Button, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Post } from "src/types/posts";
import { Wrapper } from "../../layouts";
import { Content, Footer, Header } from "../../layouts/sections";
import { getSinglePost } from "@services/postsService";
import { DetailPost } from "@components/DetailPost";
import { Loading } from "@components/Loading";

const StyledContainer = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
}));

interface IProps {
    post: Post;
}
export const PostDetail: FC<IProps | any> = (props) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { slug: postId } = router.query;
    console.log(postId, "postID");
    const { post } = props;
    const [rePost, setRePost] = useState<Post | null>(null);
    const handleBack = () => {
        router.push("/");
    };

    const handleRefresh = async () => {
        setLoading(true);
        const data: any = await getSinglePost(postId);
        setRePost(data);
        setLoading(false);
    };

    return (
        <>
            <Grid>
                <Wrapper {...props}>
                    <Header />
                    <Content>
                        <StyledContainer>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Button
                                    variant={"contained"}
                                    color={"success"}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    onClick={handleRefresh}
                                >
                                    Refresh
                                </Button>
                            </Box>
                            {loading ? (
                                <Loading />
                            ) : (
                                <DetailPost post={rePost || post} />
                            )}
                        </StyledContainer>
                    </Content>
                    <Footer />
                </Wrapper>
            </Grid>
        </>
    );
};
