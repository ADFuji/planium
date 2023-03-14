import React, { useEffect } from "react";
import styled from "styled-components";
import { events_all } from "../../ParseJSON";
import { AppContext } from "../../AppProvider";
import { CalendarContext } from "./CalendarProvider";
import { EventDetails } from "../Event";
import { EventLine } from "./List";
const DayContainer = styled.div`
    @media (min-width: 320px) {
        height: 45px;
    }
    @media (min-width: 1280px) {
        height: 99px;
    }
    @media (min-width: 1366px) {
        height: 88px;
    }
    @media (min-width: 1920px) {
        height: 136px;
    }
    @media (min-width: 2400px) {
        height: 195px;
    }
    width: calc(100% / 7);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 1px solid ${props => props.theme === "light" ? "rgb(200,200,200)" : "white"};
    font-size: 1.3rem;
    &:hover {
        background-color: ${props => props.theme === "light" ? "rgba(0,0,0,0.05);" : "rgba(255,255,255,0.05);"};
        cursor: pointer;
    }
`;

const eventWith = 5;
const eventHeight = eventWith;
const eventMargin = 5;
const eventPadding = 2;
const WithEvent = styled.span`
    @media (min-width: 320px) {
        width: ${eventWith - 2}px;
        height: ${eventHeight - 2}px;
    }
    @media (min-width: 768px) {
        width: ${eventWith}px;
        height: ${eventHeight}px;
    }
    @media (min-width: 1024px) {
        width: ${eventWith + 2}px;
        height: ${eventHeight + 2}px;
    }
    border-radius: 50%;
    background-color: rgb(120,120,120);
    margin-top: ${eventMargin}px;
    padding: ${eventPadding}px;
`;
const NoEvent = styled.span`
    @media (min-width: 320px) {
        width: ${eventWith - 2}px;
        height: ${eventHeight - 2}px;
    }
    @media (min-width: 768px) {
        width: ${eventWith}px;
        height: ${eventHeight}px;
    }
    @media (min-width: 1024px) {
        width: ${eventWith + 2}px;
        height: ${eventHeight + 2}px;
    }
    border-radius: 50%;
    margin-top: ${eventMargin}px;
    padding: ${eventPadding}px;
`;

const Today = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: coral;
    color: ${props => props.theme === "light" ? "black" : "white"};
    @media (min-width: 320px) {
        width: 30px;
        height: 30px;
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
    @media (min-width: 1024px) {
        width: 50px;
        height: 50px;
    }
    @media (min-width: 1400px) {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
`;

const NotToday = styled.span`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme === "light" ? "black" : "white"};
    @media (min-width: 320px) {
        width: 30px;
        height: 30px;
    }
    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
    @media (min-width: 1024px) {
        width: 50px;
        height: 50px;
    }
    @media (min-width: 1400px) {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
`;
const EventsContainer = styled.div`
    height: 100%;
    width: 100%;
`;

function Day(props) {
    const { state } = React.useContext(AppContext);
    const { dispatch } = React.useContext(CalendarContext);
    const [day, setDay] = React.useState(props.day);
    const [month, setMonth] = React.useState(props.month);
    const [year, setYear] = React.useState(props.year);
    const [hasEvent, setHasEvent] = React.useState(props.hasEvent);

    useEffect(() => {
        setDay(props.day);
        setMonth(props.month);
        setYear(props.year);
        setHasEvent(props.hasEvent);
    }, [props.day, props.month, props.year, props.hasEvent]);

    const date = new Date(year, month, day);
    if (date.getMonth() !== month) {
        return (
            <DayContainer theme={state.theme}>
                <span></span>
                <span></span>
            </DayContainer>
        );
    }

    function displayEvents(e) {
        function setDetails(props) {
            const p = {
                title: props.title[state.lang] ? props.title[state.lang] : props.title["fr"],
                description: props.description[state.lang] ? props.description[state.lang] : props.description["fr"],
                thumbnail: props.image,
                firstDate: props.firstDate,
                lastDate: props.lastDate,
                firstTimeStart: props.firstTimeStart,
                firstTimeEnd: props.firstTimeEnd,
                address: props.address,
                postalCode: props.postalCode,
                city: props.city,
                department: props.department,
                region: props.region,
                conditions: props.conditions ? props.conditions : "",
            }
            const _ret = <EventDetails props={p} onEventClose={() => dispatch({ type: "SET_DETAIL", payload: null })} />;
            dispatch({ type: "SET_DETAIL", payload: _ret });
        }
        const events = events_all.get(year).get(month).get(day);
        let ret = [];
        events.forEach((event) => {
            ret.push(
                <EventLine onClick={() => setDetails(event)} _event={event}
                >{event.title["fr"]}</EventLine>
            );
        });
        const _ret = <EventsContainer>{ret}</EventsContainer>;
        dispatch({ type: "SET_EVENTS", payload: _ret });

    }

    return (
        <DayContainer onClick={hasEvent ? displayEvents : null} theme={state.theme}>
            {props.isToday ? <Today>{day}</Today> : <NotToday theme={state.theme}>{day}</NotToday>}
            {hasEvent ? <WithEvent /> : <NoEvent />}
        </DayContainer>
    );
}

export default Day;