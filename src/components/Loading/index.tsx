import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const Loading = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress size={80} />
            <Typography sx={{ marginTop: "5px" }}>Please Wait</Typography>
        </Box>
    );
};
