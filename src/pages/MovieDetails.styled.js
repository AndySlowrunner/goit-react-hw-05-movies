import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;
    border-bottom: 3px solid gray;
    > img {
        margin-bottom: 16px;
    }
`;

export const StyledText = styled.div`
    display: block;
    margin-left: 12px;
    margin-bottom: 16px;

    > h1, h2, h3 {
        margin: 0;
    }
`;

export const StyledAddInfo = styled.div`
    border-bottom: 3px solid gray;
`;

export const StyledBackButton = styled.p`
    margin: 0;
`;