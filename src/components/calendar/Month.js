import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

import Week from './Week';

const MonthContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

function Month(props) {
    const [month, setMonth] = React.useState(props.month);
    const [year, setYear] = React.useState(props.year);

    useEffect(() => {
        setMonth(props.month);
        setYear(props.year);
    }, [props.month, props.year]);

    return (
        <MonthContainer>
            <Week firstWeek={true} lastWeek={false} firstDay={1} month={month} year={year} />
            <Week firstWeek={false} lastWeek={false} firstDay={8} month={month} year={year} />
            <Week firstWeek={false} lastWeek={false} firstDay={15} month={month} year={year} />
            <Week firstWeek={false} lastWeek={false} firstDay={22} month={month} year={year} />
            <Week firstWeek={false} lastWeek={true} firstDay={29} month={month} year={year} />
        </MonthContainer>
    );

    /*
    return (
        <MonthContainer>
            <Week firstWeek={true} start={"01" + "/" + parsemonth + "/" + year} end={parseInt(startDay) + 7 + "/" + startMonth + "/" + startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay) + 7 + "/" + startMonth + "/" + startYear} end={parseInt(startDay) + 14 + "/" + startMonth + "/" + startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay) + 14 + "/" + startMonth + "/" + startYear} end={parseInt(startDay) + 21 + "/" + startMonth + "/" + startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay) + 21 + "/" + startMonth + "/" + startYear} end={parseInt(startDay) + 28 + "/" + startMonth + "/" + startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay) + 28 + "/" + startMonth + "/" + startYear} end={parseInt(startDay) + 35 + "/" + startMonth + "/" + startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay) + 35 + "/" + startMonth + "/" + startYear} end={parseInt(startDay) + 42 + "/" + startMonth + "/" + startYear} />
        </MonthContainer>
    );
    */
}
export default Month;

/*

            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+14)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+21)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+7)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+14)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={false} start={parseInt(startDay+21)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+28)+"/"+startMonth+"/"+startYear} />
            <Week firstWeek={false} lastWeek={true} start={parseInt(startDay+28)+"/"+startMonth+"/"+startYear} end={parseInt(startDay+35)+"/"+startMonth+"/"+startYear} />
*/