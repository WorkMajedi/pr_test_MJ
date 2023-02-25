import React from "react";
import { AppBar, Box, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { SwitcherMode } from "@components";

export const Header: React.FC = () => {
    return (
        <>
            <Box>
                <Paper
                    sx={{
                        background: "header.background",
                        color: "header.color",
                        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <AppBar
                        position={"relative"}
                        sx={{
                            padding: { xs: "18px" },
                            borderRadius: "inherit",
                            background: "inherit",
                        }}
                    >
                        <Toolbar
                            sx={{
                                p: { lg: 0 },
                                mx: 12,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Grid
                                container
                                maxWidth="xl"
                                alignItems={"center"}
                                justifyContent={"space-between"}
                            >
                                <Grid item>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ flexGrow: 1 }}
                                        color={"light"}
                                    >
                                        test
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    md={1}
                                    justifyContent={"flex-end"}
                                    sx={{
                                        display: { md: "flex", xs: "none" },
                                        position: "relative",
                                    }}
                                >
                                    <SwitcherMode />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Paper>
            </Box>
        </>
    );
};
