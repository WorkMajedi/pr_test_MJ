import React from "react";
import { Wrapper } from "src/layouts";
import { Content, Footer, Header } from "src/layouts/sections";
import { Grid } from "@mui/material";
import HomeContent from "./component/HomeContent";

export const HomeScreen: React.FC = (props) => {
    return (
        <Grid>
            <Wrapper {...props}>
                <Header />
                <Content>
                    <HomeContent />
                </Content>
                <Footer />
            </Wrapper>
        </Grid>
    );
};
