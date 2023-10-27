import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBox = styled.div`
    display: flex;
    margin-top: 8px;
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

export const StyledLink = styled(NavLink)`
    border: 1px solid darkgray;
    border-radius: 4px;
    margin-bottom: 10px;
    padding-right: 4px;
    padding-left: 4px;
    text-align: center;
    text-decoration: none;
   
`;