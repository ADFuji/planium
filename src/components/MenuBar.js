import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import ToggleSwitch from "./ToggleSwitch";
import Logo from "./Logo";
import Burger from "./Burger";

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: ${props => props.theme === "light" ? "white" : "#011213"};
    color: ${props => props.theme === "light" ? "#011213" : "white"};
    border-bottom: 1px solid #e0e0e0;
    div {
        color: ${props => props.theme === "light" ? "#011213" : "white"};
    }
`;
function MenuBar(props) {
    const { state } = React.useContext(AppContext);
    const [checked, setChecked] = React.useState(false);
    function handleToggleSwitchChange() {
        setChecked(!checked);
        props.changeView();
    }
    return (
        <MenuBarContainer theme={state.theme}>
            <Burger onClick={props.toggleMenu} theme={state.theme} />
            <Logo>Planium</Logo>
            <ToggleSwitch checked={checked} onChange={handleToggleSwitchChange} />
        </MenuBarContainer>
    );
}

export default MenuBar;