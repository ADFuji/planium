import React from "react";
import styled from "styled-components";
import { events } from '../../ParseJSON';
import Event, { EventDetails } from '../Event';

const EventsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 110px);
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
    overflow-y: scroll;
`;
const _events = ((events) => {
    let ret = [];
    events.forEach((event) => {
        const title = event.title;
        let description = event.description;
        try {
            console.log(description["fr"]);
        }
        catch (e) {
            description = { fr: "No description" };
        }
        const firstDate = event.firstDate;
        const lastDate = event.lastDate;
        ret.push(<Event title={title["fr"]} description={description["fr"]} firstDate={new Date(firstDate).toLocaleDateString()} lastDate={new Date(lastDate).toLocaleDateString()} />);
    })
    return ret
})(events)
function Events(props) {
    return (
        <EventsContainer>
            {_events}
        </EventsContainer>
    )
}

export default Events;