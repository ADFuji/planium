import React from "react";
import styled from "styled-components";
import Day from "./Day";
import { events_all } from "../../ParseJSON";
import { AppContext } from "../../AppProvider";

function getFirstDayOfTheMonth(date) {
    const index = date.getDay();
    switch (index) {
        case 0:
            return 6;
        case 1:
            return 0;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 3;
        case 5:
            return 4;
        case 6:
            return 5;
        default:
            throw new Error("Invalid index");
    }
}

const WeekContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const TODAY = new Date();

function Week(props) {
    const [firstDay] = React.useState(props.firstDay);
    const { state } = React.useContext(AppContext);
    const firstDayIndex = getFirstDayOfTheMonth(new Date(state.date.year, state.date.month, 1));
    let days = [];
    for (let i = 0; i < 7; i++) {
        const isToday = (() => {
            if (TODAY.getMonth() === state.date.month && TODAY.getFullYear() === state.date.year && (i + firstDay - firstDayIndex) > 0 && (i + firstDay - firstDayIndex) === TODAY.getDate()) {
                return true;
            }
            return false;
        })();
        days.push(<Day isToday={isToday} day={i + firstDay - firstDayIndex > 0 ? i + firstDay - firstDayIndex : 0} month={state.date.month} year={state.date.year} hasEvent={events_all.has(state.date.year) && events_all.get(state.date.year).has(state.date.month) && events_all.get(state.date.year).get(state.date.month).has(i + firstDay - firstDayIndex > 0 ? i + firstDay - firstDayIndex : 0)} />);
    }
    return (
        <WeekContainer>
            {days}
        </WeekContainer>
    );
}

export default Week;