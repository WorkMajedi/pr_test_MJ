import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1E88E5",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#303030",
            paper: "#424242",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#BDBDBD",
        },
    },
});
export default darkTheme;
