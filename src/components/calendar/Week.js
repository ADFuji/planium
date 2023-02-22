import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import Day from "./Day";
import { events, hasEvents } from "../../ParseJSON";


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
`;

const DayContainer = styled.div`
    width: 100%;
    max-height: 120px;
    min-height: 70px;
    height: 100px;
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

    useEffect(() => {
        setFirstDay(props.firstDay);
        setMonth(props.month);
        setYear(props.year);
    }, [props.firstDay, props.month, props.year]);

    const firstDayIndex = getFirstDayOfTheMonth(new Date(year, month, 1));
    const days = [];
    for (let i = 0; i < 7; i++) {
        const isToday = (() => {
            if (TODAY.getMonth() == month && TODAY.getFullYear() == year && (i + firstDay - firstDayIndex) > 0 && (i + firstDay - firstDayIndex) == TODAY.getDate()) {
                return true;
            }
            return false;
        })();
        if (i + firstDay > getNumberOfDays(month, year)) {
            days.push(<Day isToday={isToday} day={""} month={month} year={year} hasEvent={false}></Day>);
        }
        else {
            days.push(<Day isToday={isToday} day={(i + firstDay - firstDayIndex) > 0 ? (i + firstDay - firstDayIndex) : ""} month={month} year={year} hasEvent={hasEvents(new Date(year, month, (i + firstDay - firstDayIndex) > 0 ? (i + firstDay - firstDayIndex) : ""))}></Day>);
        }
    }

    return (
        <WeekContainer>
            {days}
        </WeekContainer>
    );

    /*
    const startDay = props.start.split("/")[0];
    const startMonth = props.start.split("/")[1];
    const startYear = props.start.split("/")[2];
    const startDate = new Date(startYear, startMonth, startDay);
    const endDay = props.end.split("/")[0];
    const endMonth = props.end.split("/")[1];
    const endYear = props.end.split("/")[2];
    const endDate = new Date(endYear, endMonth, endDay);
    let s = [];
    //get if start day is monday or tuesday or ...
    const startDayIndex = getDay(startDate);
    const endDayIndex = getDay(endDate);
    for (let i = 0; i < 7; i++) {
        if (i + parseInt(startDay) - startDayIndex > getNumberOfDays(startMonth, startYear)) {
            //s.push("");
            s.push(<Day today={TODAY} day="" month={startMonth} year={startYear} hasEvent={false}></Day>);
        }
        else {
            //s.push((i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):"");
            s.push(<Day today={TODAY} day={(i + parseInt(startDay) - startDayIndex) > 0 ? (i + parseInt(startDay) - startDayIndex) : ""} month={startMonth} year={startYear} hasEvent={hasEvents(new Date(startYear, startMonth, (i + parseInt(startDay) - startDayIndex) > 0 ? (i + parseInt(startDay) - startDayIndex) : ""))}></Day>);
        }
    }

    if (s.length === 0) {
        return (
            <Fragment></Fragment>
        );
    }


    return (
        <WeekContainer>
            {
                s.map((day) => (
                    day
                ))
            }
        </WeekContainer>
    );
    */
}

export default Week;