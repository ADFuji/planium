import React from "react";
import styled from "styled-components";
const iconCalendar = require("./assets/calendar.png");
const iconList = require("./assets/list.png");
//by default, the toggle switch is off (on the left)

const width = 80;
const height = 30;
const padding = 5;
const iconWidth = height - 10
const iconHeight = height - 10


const ToggleSwitchContainer = styled.label`
    position: relative;
    display: inline-block;
    width: ${width}px;
    height: ${height}px;
    padding: ${padding}px;
    margin: 0px 5px;
    border-radius: 50px;
    background-color: #ccc;
    cursor: pointer;
`;

const ToggleSwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;
ToggleSwitchInput.onChange = function (e) {
    e()
}

const ToggleSwitchIcon = styled.img`
    width: ${iconWidth}px;
    height: ${iconHeight}px;
`;

const ToggleSwitchObj = styled.div`
    width: ${iconWidth}px;
    height: ${iconHeight}px;
    position: absolute;
    top: ${padding}px;
    left: ${padding}px;
    padding: ${padding}px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    &:before {
        position: absolute;
        src: ${props => props.src};
        content: "";
        height: ${iconHeight}px;
        width: ${iconWidth}px;
        left: 0;
        bottom: 0;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    ${ToggleSwitchInput}:checked + & {
        -webkit-transform: translateX(${width - iconWidth - 2 * padding}px);
        -ms-transform: translateX(${width - iconWidth - 2 * padding}px);
        transform: translateX(${width - iconWidth - 2 * padding}px);
    }
    ${ToggleSwitchInput}:focus + & {
    }
    ${ToggleSwitchInput}:checked + &:before {

    }
`;

function ToggleSwitch(props) {
    const [checked, setChecked] = React.useState(false);
    const [iconTrue, setIconTrue] = React.useState(props.iconTrue ? props.iconTrue : <ToggleSwitchIcon src={iconList} />);
    const [iconFalse, setIconFalse] = React.useState(props.iconFalse ? props.iconFalse : <ToggleSwitchIcon src={iconCalendar} />);
    const [icon, setIcon] = React.useState(iconFalse);
    function handleToggleSwitchChange(e) {
        setChecked(e.target.checked);
        setIcon(e.target.checked ? iconTrue : iconFalse);
        props.onChange();
    }
    return (

        <ToggleSwitchContainer>
            <ToggleSwitchInput type="checkbox" checked={checked} onChange={handleToggleSwitchChange} />
            <ToggleSwitchObj>{icon}</ToggleSwitchObj>
        </ToggleSwitchContainer>
    );

}

export default ToggleSwitch;