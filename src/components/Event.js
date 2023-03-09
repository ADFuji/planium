import React from "react";
import styled from "styled-components";

const VerticalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    &:first-child {
        padding: 10px;
        margin-right: 10px;
        border-right: 2px solid #e0e0e0;
    }
`;
const EventContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    flex-direction: row;
    margin: 0;
    padding: 0;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }
`;
const EventTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 700;
`;
const EventDescription = styled.p`
    margin: 0;
    padding: 0;
`;
const EventDate = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    font-weight: 300;
    font-style: italic;
`;
const EventDisplayContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100px;
    flex-direction: row;
    margin: 0;
    padding: 0;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }
`;
function Event(props) {
    function handleEventClick(e) {
        props.onEventClick(<EventDetails title={props.title} description={props.description} />);
    }
    return (
        <EventContainer onClick={handleEventClick}>
            <VerticalDiv>
                <EventDate>{props.firstDate}</EventDate>
                <EventDate>{props.lastDate}</EventDate>
            </VerticalDiv>
            <VerticalDiv>
                <EventTitle>{props.title}</EventTitle>
                <EventDescription>{props.description}</EventDescription>
            </VerticalDiv>
        </EventContainer>
    )
}

function EventDetails(props) {
    return (
        <EventDisplayContainer>
            <VerticalDiv>
                <EventTitle>{props.title}</EventTitle>
                <EventDescription>{props.description}</EventDescription>
            </VerticalDiv>
        </EventDisplayContainer>
    )
}

export default Event;
export { EventDetails };