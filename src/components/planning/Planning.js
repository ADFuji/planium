import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Events from "./Events";

const PlanningContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(250,250,250);
    color: rgb(80,80,80);
    width: 100%;
    min-width: 300px;
    max-width: 100vw;
    user-select: none;
`;

function Planning(props) {
    return (
        <PlanningContainer>
            <Header />
            <Events />
        </PlanningContainer>
    )
}

export default Planning;