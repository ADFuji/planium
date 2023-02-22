import React, { Fragment } from "react";

import styled from "styled-components";

import Day from "./Day";

import { events, hasEvents } from "../../ParseJSON";


function getNumberOfDays(month, year) {
    console.log(new Date(year, month, 0).getDate());
    return new Date(year, month, 0).getDate();
}
function getDay(date){
    const index = date.getDay();
    switch(index){
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

const Td = styled.div`
width: 70px;
height: 70px;
margin: 0;
padding: 0;
`;
const Tr = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 70px;
margin: 0;
padding: 0;
`;

const TODAY = new Date();

function Week(props)
{
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
    for(let i=0;i<7;i++){
        if(i+parseInt(startDay) - startDayIndex > getNumberOfDays(startMonth, startYear)){

        }else{
            //s.push((i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):"");
            s.push(<Day today={TODAY} day={(i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):""} month={startMonth} year={startYear} hasEvent={hasEvents(new Date(startYear, startMonth, (i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):""))}></Day>);
        }
    }

    if(s.length===0){
        return (
            <Fragment></Fragment>
        );
    }


    return (
        <Tr>
            {
                s.map((day) => (
                    <Td>{day}</Td>
                ))
            }
        </Tr>
    );
}

export default Week;