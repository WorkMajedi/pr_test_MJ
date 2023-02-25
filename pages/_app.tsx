import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import store from "@redux/store";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@definitions/mui/createEmotionCache";
import { THEMES } from "@utils/constatns";
import { CssBaseline } from "@mui/material";
import LightTheme from "@definitions/mui/Theme/lightTheme";
import DarkTheme from "@definitions/mui/Theme/DarkTheme";

import "../src/assets/styles/style.css";

/**
 * BaseApp function.
 * @param {AppProps} Component component param.
 * @param {AppProps} pageProps pageProps param.
 * @return {JSX}
 */

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}
function getActiveTheme(themeMode: "light" | "dark") {
    return themeMode === "light" ? LightTheme : DarkTheme;
}
function BaseApp(props: MyAppProps): JSX.Element {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    const [activeTheme, setActiveTheme] = useState(LightTheme);
    const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">(
        "light",
    );
    const toggleTheme = () => {
        const desiredTheme: any =
            selectedTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setSelectedTheme(desiredTheme);
    };
    useEffect(() => {
        const modeTheme: any = localStorage.getItem("modeTheme");
        setActiveTheme(getActiveTheme(modeTheme));
    }, [selectedTheme]);
    useEffect(() => {
        const modeTheme: any = localStorage.getItem("modeTheme");

        setSelectedTheme(modeTheme);
    }, []);

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <MuiThemeProvider theme={activeTheme}>
                    <CssBaseline />

                    <Component {...pageProps} toggleTheme={toggleTheme} />
                </MuiThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

export default BaseApp;
