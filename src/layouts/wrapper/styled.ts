import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${({ theme }: any) => theme.palette.background.default};
`;
