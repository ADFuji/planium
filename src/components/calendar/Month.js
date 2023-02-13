import React, { Fragment } from 'react';

import Week from './Week';

function Month(props){
    const startDay = props.start.split("/")[0];
    const startMonth = props.start.split("/")[1];
    const startYear = props.start.split("/")[2];
    const startDate = new Date(startYear, startMonth, startDay);
    console.log(startDay, "/", startMonth, "/", startYear);
    const endDay = props.end.split("/")[0];
    const endMonth = props.end.split("/")[1];
    const endYear = props.end.split("/")[2];
    const endDate = new Date(endYear, endMonth, endDay);
    let weeks = [];
    for(let i=0;i<5;i++){
        weeks.push(<Week start={startDay+i*7+"/"+startMonth+"/"+startYear} end={startDay+(i+1)*7+"/"+startMonth+"/"+startYear} />);
    }
    return (
        <Fragment>
            <Week firstWeek={true} start={startDay+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+7+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay)+7+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+14+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay)+14+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+21+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay)+21+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+28+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay)+28+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+35+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay)+35+"/"+startMonth+"/"+startYear} end={parseInt(startDay)+42+"/"+startMonth+"/"+startYear} />
        </Fragment>
    );
}
export default Month;

/*

            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+14)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+21)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+7)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+14)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+21)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+28)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay+28)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+35)+"/"+startMonth+"/"+startYear} />
*/