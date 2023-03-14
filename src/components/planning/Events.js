import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";
import { getEvents, sortWithTags } from "../../ParseJSON";
import Event from '../Event';
const EventsContainer = styled.div`
    height: calc(100vh - 55px);
    width: 100%;
    background-color: ${props => props.theme === "light" ? "#f5f5f5" : "#1e1e1e"};
    color: rgb(80,80,80);
    border-bottom: 1px solid #e0e0e0;
    overflow-y: scroll;
`;
let width = 100;
let Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (min-width: 320px) {
        width: 100%;
        height: 100%;
    }
    @media (min-width: 1920px) {
        width: ${width}%;
        height: 100%;
    }
    @media (min-width: 2400px) {
        width: ${width === 100 ? width : width - 10}%;
        height: 100%;
    }
    transition: width 0.5s ease-in-out;
`;
function Events(props) {
    const { state } = React.useContext(AppContext);
    function handleClick(e) {
        props.onEventClick(e);
        width = 70;
    }
    function handleClose() {
        props.onEventClose();
        width = 100;
    }
    const _events = (() => {
        const TODAY = new Date();
        let events_objs = getEvents(TODAY);
        events_objs = sortWithTags(events_objs, state.tags);
        let events = [];
        events_objs.forEach((event) => {
            const e = {
                title: event.title[state.lang] ? event.title[state.lang] : event.title["fr"],
                description: event.description[state.lang] ? event.description[state.lang] : event.description["fr"],
                firstDate: new Date(event.firstDate).toLocaleDateString(),
                lastDate: new Date(event.lastDate).toLocaleDateString(),
                tags: event.tags,
                thumbnail: event.image,
                firstTimeStart: event.firstTimeStart,
                firstTimeEnd: event.firstTimeEnd,
                address: event.address,
                postalCode: event.postalCode,
                city: event.city,
                department: event.department,
                region: event.region,
                conditions: event.conditions ? event.conditions : "",
                onEventClick: handleClick,
                onEventClose: handleClose
            }
            events.push(<Event props={e} />);
        })
        return events;
    })()
    return (
        <Container theme={state.theme}>
            <EventsContainer theme={state.theme}>
                {_events}
            </EventsContainer>
        </Container>
    )
}

export default Events;