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
function Events(props) {
    const { state, dispatch } = React.useContext(AppContext);
    function handleClick(e) {
        props.onEventClick(e);
    }
    const _events = (() => {
        let ret = [];
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
                        console.log(event);
                        const e = {
                            title: event.title[state.lang] ? event.title[state.lang] : event.title["fr"],
                            description: event.description[state.lang] ? event.description[state.lang] : event.description["fr"],
                            firstDate: new Date(event.firstDate).toLocaleDateString(),
                            lastDate: new Date(event.lastDate).toLocaleDateString(),
                            tags: event.tags,
                            thumbnail: event.image,
                            onEventClick: handleClick
                        }
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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", width: "75%" }}>
            <Header />
            <EventsContainer>
                {_events}
            </EventsContainer>
        </div>
    )
}

export default Events;