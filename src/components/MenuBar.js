import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ToggleSwitch from "./ToggleSwitch";

const MenuBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
    padding: 0 10px;
`;
const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

function MenuBar(props) {
    const [checked, setChecked] = React.useState(false);
    function handleToggleSwitchChange(e) {
        setChecked(e.target.checked);
    }
    return (
        <MenuBarContainer>
            <ToggleSwitch checked={checked} onChange={handleToggleSwitchChange} />
        </MenuBarContainer>
    );
}

export default MenuBar;