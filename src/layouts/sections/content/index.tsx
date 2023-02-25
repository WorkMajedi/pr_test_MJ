import React, { useEffect } from "react";
import { StyledContainer } from "./styled";
import { useSelector } from "react-redux";

interface IProps {
    children: any;
    toggleTheme?: () => void;
}
export const Content: React.FC<IProps> = ({ children, toggleTheme }) => {
    const modeTheme = useSelector((state: any) => state.theme.currentTheme);
    useEffect(() => {
        // eslint-disable-next-line new-cap
        if (toggleTheme) toggleTheme();
    }, [modeTheme]);

    return <StyledContainer maxWidth="xl">{children}</StyledContainer>;
};
