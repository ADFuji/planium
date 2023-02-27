import React, { useEffect } from "react";

import styled from "styled-components";

const DayContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 0;
    border: 1px solid rgba(0,0,0,0.08);
    font-size: 1.3rem;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }
`;

const day_style = {
    borderRadius: "50%",
    padding: "5px"
};

const eventWith = 2;
const eventHeight = eventWith;
const eventMargin = 10;
const eventPadding = 5;
const eventStyle = {
    width: `${eventWith}px`,
    height: `${eventHeight}px`,
    borderRadius: "50%",
    backgroundColor: "rgb(120,120,120)",
    marginTop: `${eventMargin}px`,
    padding: `${eventPadding}px`
};

const noEventStyle = {
    width: `${eventWith}px`,
    height: `${eventHeight}px`,
    borderRadius: "50%",
    marginTop: `${eventMargin}px`,
    padding: `${eventPadding}px`
};

const todayStyle = {
    color: "white",
    backgroundColor: "coral",
    borderRadius: "50%",
    padding: "5px"
};

function Day(props) {
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
    if (date.getMonth() != month) {
        return (
            <DayContainer>
                <span></span>
                <span></span>
            </DayContainer>
        );
    }

    return (
        <DayContainer>
            <span style={props.isToday ? todayStyle : {}}>{day}</span>
            <span style={hasEvent ? eventStyle : noEventStyle}></span>
        </DayContainer>
    );

    /*
    return (
        <ContainerStyle style={{borderTop: day!=="" ? "1px solid rgb(100,100,100)" : "1px transparent"}}>
            <CenteredDiv style={isTODAY ? todayStyle : {}}><p>{day}</p></CenteredDiv>
            {
                day!="" && hasEvent ? <Span style={{backgroundColor: "rgb(100,100,100)", width: "1px", height: "1px", borderRadius: "50%", marginTop:"6px"}}></Span> : <Span style={{width: "2px", height: "2px", borderRadius: "50%", marginTop:"3px"}}></Span>
            }
        </ContainerStyle>
    );
    */
}

export default Day;