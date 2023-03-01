import React from "react";
import styled from "styled-components";
import ToggleSwitch from "./ToggleSwitch";
import Logo from "./Logo";
import Button from "./Button";

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

function MenuBar(props) {
    const [checked, setChecked] = React.useState(false);
    function handleToggleSwitchChange() {
        setChecked(!checked);
        props.changeView();
    }
    return (
        <MenuBarContainer>
            <Logo>Planium</Logo>
            <Button onClick={props.toggleMenu}>MenuBar</Button>
            <ToggleSwitch checked={checked} onChange={handleToggleSwitchChange} />
        </MenuBarContainer>
    );
}

export default MenuBar;