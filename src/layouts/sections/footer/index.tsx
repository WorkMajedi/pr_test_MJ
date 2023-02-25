import React from "react";
import { Box, Divider, Grid } from "@mui/material";

export const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "footer.background",
                padding: { xs: "20px ", md: "20px 165px" },
            }}
        >
            <Grid container direction={{ xs: "column", md: "row" }}>
                footer
            </Grid>
            <Divider sx={{ m: "30px 0 12px 0" }} />
            <Grid container justifyContent={"center"}></Grid>
        </Box>
    );
};
