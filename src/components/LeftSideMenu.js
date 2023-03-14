import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
const DIV = styled.div`
    @media (min-width: 320px) {
        position: fixed;
        transition: width 0.5s, height 0.5s;
    }
    @media (min-width: 700px) {
        position: relative;
        height: calc(100vh - 51px);
        transition: width 0.5s, height 0.5s;
    }
    @media (min-width: 1920px) {
        
    }
    width: 0;
    height: 0;
    overflow: hidden;
    background-color: ${props => props.theme === "light" ? "#1e1e1e" : "#011416"};
    
    ${props => !props.visible}{
        @media (min-width: 320px) {
            width: 100%;
            height: calc(100vh - 51px);
        }
        @media (min-width: 700px) {
            width: 20%;
            height: calc(100vh - 51px);
        }
        @media (min-width: 1920px) {
            width: 20%;
            height: calc(100vh - 51px);
            transition: width 0.5s, height 0.5s;
        }
        
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul{
        color: white;
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 120px;
        li{
            padding: 10px;
            margin: 0;
            &:hover{
                background-color: rgba(256,256,256,0.3);
                cursor: pointer;
            }
        }
    }
`;


function LeftSideMenu(props) {
    const { state } = React.useContext(AppContext);
    const { visible } = props;
    return (
        <DIV visible={visible} theme={state.theme}>
            {props.children}
        </DIV>
    )
}

export default LeftSideMenu;