import React, { useContext } from "react";
import styled from "styled-components";
import { DateContext } from '../calendar/DateProvider';
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    width: 100%;
    background-color: #757575;
    border-bottom: 1px solid #e0e0e0;
`;
function Header(props) {
    const { state, dispatch } = useContext(DateContext);
    return (
        <HeaderContainer>
        </HeaderContainer>
    )
}

export default Header;