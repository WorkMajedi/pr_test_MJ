import styled from "@emotion/styled";

export const Wrapper = styled.div`
    padding: 20px 15px;
`;

export const Container = styled.div`
    //max-width: 71rem;
    //min-width: 71rem;
    background-color: ${(props: any) => props.theme.header.background};
    @media (max-width: 575px) {
        min-width: 22rem;
    }
`;
