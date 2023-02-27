import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

import { DateContext, dateReducer } from './DateProvider';
import Week from './Week';

const MonthContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

function Month(props) {
    const {state, dispatch} = React.useContext(DateContext);
    const [weeks, setWeeks] = React.useState([]);
    
    useEffect(() => {
        let temp = [];
        for (let i = 0; i < 6; i++) {
            temp.push(<Week firstWeek={i === 0 ? true : false} lastWeek={i === 5 ? true : false} firstDay={i * 7 + 1} month={state.date.month} year={state.date.year} />);
        }
        setWeeks(temp);
    }, [state.date.month, state.date.year]);

    return (
        <MonthContainer>
            {weeks}
        </MonthContainer>
    );

    /*
    return (
        <MonthContainer>
            <Week firstWeek={true} lastWeek={false} firstDay={1} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
            <Week firstWeek={false} lastWeek={false} firstDay={8} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
            <Week firstWeek={false} lastWeek={false} firstDay={15} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
            <Week firstWeek={false} lastWeek={false} firstDay={22} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
            <Week firstWeek={false} lastWeek={false} firstDay={29} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
            <Week firstWeek={false} lastWeek={true} firstDay={36} month={props.previous ? state.date.month -1 : props.next ? state.date.month + 1 : state.date.month} year={state.date.year} />
        </MonthContainer>
    );*/
}
export default Month;