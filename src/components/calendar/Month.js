import React, { useEffect } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../AppProvider';
import Week from './Week';

const MonthContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
`;

function Month(props) {
    const { state } = React.useContext(AppContext);
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
}
export default Month;