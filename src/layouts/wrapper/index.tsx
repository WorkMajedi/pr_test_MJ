import React, { useEffect } from "react";
import { Container } from "./styled";
import { useSelector } from "react-redux";

interface IProps {
    children: any;
    toggleTheme?: () => void;
}
export const Wrapper: React.FC<IProps> = ({ children, toggleTheme }) => {
    const modeTheme = useSelector((state: any) => state.theme.currentTheme);
    useEffect(() => {
        // eslint-disable-next-line new-cap
        if (toggleTheme) toggleTheme();
    }, [modeTheme]);

    return <Container>{children}</Container>;
};
