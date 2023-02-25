import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
        lighter?: PaletteColor;
        darker?: PaletteColor;
    }
    // eslint-disable-next-line no-unused-vars
    interface Palette {
        gray?: PaletteColor;
    }
    // eslint-disable-next-line no-unused-vars
    interface PaletteOptions {
        gray?: PaletteColorOptions;
    }
}
declare module "@mui/material/Typography" {
    // eslint-disable-next-line no-unused-vars
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
    }
}
const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1E88E5",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#F5F5F5",
        },
    },
});

export default lightTheme;
