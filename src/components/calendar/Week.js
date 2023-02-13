import React from "react";

import styled from "styled-components";

import Day from "./Day";

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

function Week(props)
{
    const startDay = props.start.split("/")[0];
    const startMonth = props.start.split("/")[1];
    const startYear = props.start.split("/")[2];
    const startDate = new Date(startYear, startMonth, startDay);
    console.log(startDay,"/",startMonth,"/",startYear," = ",startDate);
    const endDay = props.end.split("/")[0];
    const endMonth = props.end.split("/")[1];
    const endYear = props.end.split("/")[2];
    const endDate = new Date(endYear, endMonth, endDay);
    let s = [];
    //get if start day is monday or tuesday or ...
    const startDayIndex = getDay(startDate);
    const endDayIndex = getDay(endDate);
    console.log(" first day of week is ",startDayIndex);
    for(let i=0;i<7;i++){
        if(i+parseInt(startDay) - startDayIndex > getNumberOfDays(startMonth, startYear)){
            s.push(<Day day="" hasEvent={false} />);
        }else{
            //s.push((i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):"");
            s.push(<Day day={(i+parseInt(startDay) - startDayIndex)>0?(i+parseInt(startDay) - startDayIndex):""} hasEvent={false} />);
        }
    }

    const Td = styled.td`
        width: 70px;
        height: 70px;
    `;

    return (
        <tr>
            {
                s.map((day) => (
                    <Td>{day}</Td>
                ))
            }
        </tr>
    );
}

export default Week;