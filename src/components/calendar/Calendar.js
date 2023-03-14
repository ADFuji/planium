import React from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarProvider";
import Header from "./Header";
import Month from "./Month";
import { EventList } from "./List";

/**
 * Composant pour afficher le calendrier
 * @param {*} props 
 * @returns 
 */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (min-width: 320px) {
    }
    @media (min-width: 768px) {
        flex-direction: row;
    }
`
const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(80,80,80);
    max-width: 100vw;
    max-height: 100vh;
    user-select: none;
    @media (min-width: 768px) {
        width: 70%;
    }
`;
const EDContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflowY: auto;
    @media (min-width: 320px) {
        height: 50%;
        width: 100%;
    }
    @media (min-width: 768px) {
        height: 100%;
        width: 30%;
    }
`;
export { EDContainer };

function Calendar(props) {
    const { state } = React.useContext(CalendarContext);

    return (
        <Container>
            <CalendarContainer>
                <Header />
                <Month />
            </CalendarContainer>
            <EDContainer theme={props.theme}>
                <EventList theme={props.theme}>
                    {state.events}
                </EventList>
                <div style={{}}>
                    {state.detail}
                </div>
            </EDContainer>
        </Container>
    );

}
export default Calendar;