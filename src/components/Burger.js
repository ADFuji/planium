import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    div{
        background-color: ${props => props.theme === "light" ? "#1e1e1e" : "#f5f5f5"};
    }
`;
const Line = styled.div`
    height: 3px;
    width: 30px;
    background-color: #000;
    margin: 5px 0;
    transition: 0.4s;
`;

const LineTop = styled(Line)`
    transform-origin: center;
    transform: ${props => props.open ? "rotate(-45deg) translate(-5px, 6px)" : "rotate(0)"};
`;

const LineMiddle = styled(Line)`
    opacity: ${props => props.open ? "0" : "1"};
    transform: ${props => props.open ? "translateX(20px)" : "translateX(0)"};
`;

const LineBottom = styled(Line)`
    transform-origin: center;
    transform: ${props => props.open ? "rotate(45deg) translate(-5px, -6px)" : "rotate(0)"};
    
`;


function Burger(props) {
    const [open, setOpen] = React.useState(false);
    function toggleMenu() {
        props.onClick();
        setOpen(!open);
    }
    return (
        <Container onClick={toggleMenu} theme={props.theme}>
            <LineTop open={open} />
            <LineMiddle open={open} />
            <LineBottom open={open} />
        </Container>
    );
}

export default Burger;