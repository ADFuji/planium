import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";
const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    padding: 10px;
    border: 1px solid ${props => props.theme === "light" ? "#1e1e1e" : "#f5f5f5"};
    border-radius: 10px;
    &:hover {
        background-color: ${props => props.theme === "light" ? "#f5f5f5" : "#1e1e1e"};
        cursor: pointer;
    }
`;
function EventLine(props) {
    const { state } = React.useContext(AppContext);
    return (
        <LineContainer onClick={() => props.onClick()} theme={state.theme}>
            {props._event.title[state.lang]}
        </LineContainer>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: auto;
    @media (min-width: 320px) {
        height: 327px;
    }
    @media (min-width: 1920px) {
        height: 250px;
    }
`;
function EventList(props) {
    return (
        <React.Fragment>
            <h1>EventList</h1>
            <Container>
                {props.children}
            </Container>
        </React.Fragment>
    );
}

export { EventList, EventLine };