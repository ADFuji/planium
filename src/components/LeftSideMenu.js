import React from "react";
import styled from "styled-components";

const DIV = styled.div`
    @media (min-width: 320px) {
        position: fixed;
        transition: width 0.5s, height 0.5s;
    }
    @media (min-width: 1920px) {
        position: relative;
        height: calc(100vh - 51px);
        transition: width 0.5s, height 0.5s;
    }
    width: 0;
    height: 0;
    overflow: hidden;
    background-color: #757575;
    
    ${props => !props.visible}{
        @media (min-width: 320px) {
            width: 100%;
            height: calc(100vh - 51px);
        }
        @media (min-width: 1920px) {
            width: 15%;
            height: calc(100vh - 51px);
        }
        
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        margin-bottom: 120px;
        li{
            padding: 10px;
            margin: 0;
            &:hover{
                background-color: rgba(0,0,0,0.05);
                cursor: pointer;
            }
        }
    }
`;


function LeftSideMenu(props) {
    const { visible } = props;
    return (
        <DIV visible={visible}>
            {props.children}
        </DIV>
    )
}

export default LeftSideMenu;