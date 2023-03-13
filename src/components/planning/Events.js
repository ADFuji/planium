import React from "react";
import styled from "styled-components";
import { AppContext } from "../../AppProvider";
import { events_all } from "../../ParseJSON";
import Event, { EventDetails } from '../Event';
import Header from "./Header";
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
        const _day = TODAY.getDate();
        const _month = TODAY.getMonth() + 1;
        const _year = TODAY.getFullYear();
        let events = [];
        for (let y = _year; y < _year + 2; y++) {
            if (!events_all.has(y)) continue;
            for (let m = 1; m < 13; m++) {
                if (!events_all.get(y).has(m) || (y === _year && m < _month)) continue;
                for (let d = 1; d < 32; d++) {
                    if (!events_all.get(y).get(m).has(d) || (y === _year && m === _month && d < _day)) continue;
                    events_all.get(y).get(m).get(d).forEach((event) => {
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
                            onEventClick: handleClick,
                            onEventClose: handleClose
                        }
                        console.log(e);
                        events.push(<Event props={e} />);
                    })
                }
            }
        }
        //filter duplicates
        events = events.filter((event, index) => {
            return events.indexOf(event) === index;
        })
        return events;
    })()
    return (
        <Container>
            <Header />
            <EventsContainer>
                {_events}
            </EventsContainer>
        </Container>
    )
}

export default Events;