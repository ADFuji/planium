import React, { useEffect } from "react";

import styled from "styled-components";

const DayContainer = styled.div`
    @media (min-width: 320px) {
        height: 45px;
    }
    @media (min-width: 768px) {
        height: 60px;
    }
    @media (min-width: 1024px) {
        height: 50px;
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

const eventWith = 5;
const eventHeight = eventWith;
const eventMargin = 5;
const eventPadding = 2;
const WithEvent = styled.div`
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
const NoEvent = styled.div`
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

const todayStyle = {
    color: "white",
    backgroundColor: "coral",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
};
const notTodayStyle = {
    backgroundColor: "transparent",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30px",
    height: "30px",
};

const Today = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: coral;
    color: white;
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
            {props.isToday ? <Today>{day}</Today> : <NotToday>{day}</NotToday>}
            {hasEvent ? <WithEvent /> : <NoEvent />}
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