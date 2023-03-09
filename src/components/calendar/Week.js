import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Day from "./Day";
import { events, hasEvents } from "../../ParseJSON";
import { DateContext, dateReducer } from "./DateProvider";


function getNumberOfDays(month, year) {
    return new Date(year, month, 0).getDate();
}
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
    }
}

const WeekContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 20%;
`;

const DayContainer = styled.div`
    width: calc(100% / 7);
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0,0,0,0.08);
    font-size: 1.3rem;
`;

const TODAY = new Date();

function Week(props) {
    const [firstDay, setFirstDay] = React.useState(props.firstDay);
    const [month, setMonth] = React.useState(props.month);
    const [year, setYear] = React.useState(props.year);
    //use the date context to get the current date
    const { state, dispatch } = React.useContext(DateContext);



    const firstDayIndex = getFirstDayOfTheMonth(new Date(state.date.year, state.date.month, 1));
    let days = [];
    for (let i = 0; i < 7; i++) {
        const isToday = (() => {
            if (TODAY.getMonth() == state.date.month && TODAY.getFullYear() == state.date.year && (i + firstDay - firstDayIndex) > 0 && (i + firstDay - firstDayIndex) == TODAY.getDate()) {
                return true;
            }
            return false;
        })();
        days.push(<Day isToday={isToday} day={i + firstDay - firstDayIndex > 0 ? i + firstDay - firstDayIndex : 0} month={state.date.month} year={state.date.year} hasEvent={hasEvents(new Date(state.date.year, state.date.month, i + firstDay - firstDayIndex > 0 ? i + firstDay - firstDayIndex : ""))}></Day>);
    }
    return (
        <WeekContainer>
            {days}
        </WeekContainer>
    );
}

export default Week;