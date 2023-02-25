import styled from "@emotion/styled";
import { Container } from "@mui/material";
export const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: `${({ theme }: any) => theme.palette.background.default}`,
}));
