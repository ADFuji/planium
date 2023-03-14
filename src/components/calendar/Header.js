import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../AppProvider';
import { getMonth } from './DateProcess';

import Button from "../Button";

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    width: 100%;
    color: ${props => props.theme === "light" ? "#1e1e1e" : "#f5f5f5"};
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    margin-bottom: 10px;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

const Day = styled.div`
    text-align: center;
    width: 100%;
    height: 20%;
    @media (min-width: 320px) {
        font-size: 1rem;
    }
    @media (min-width: 1920px) {
        font-size: 1.5rem;
    }
    @media (min-width: 2400px) {
        font-size: 1.6rem;
    }
`;

const ControlSpan = styled.span`
    margin: 0px 5px;
    padding: 5px 10px;
    border-radius: 5px;
    @media (min-width: 320px) {
        font-size: 1rem;
    }
    @media (min-width: 1920px) {
        font-size: 1.6rem;
    }
    @media (min-width: 2400px) {
        font-size: 2rem;
    }
    
`;
const days = {
    fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    en: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
}

function Header(props) {
    const { state, dispatch } = useContext(AppContext);

    return (
        <HeaderContainer theme={state.theme}>
            <ControlsContainer>
                <ControlSpan> {getMonth(state.lang, state.date.month)} - {state.date.year}</ControlSpan>
                <SelectContainer>
                    <Button onClick={() => dispatch({ type: 'prevYear' })}>&lt;&lt;</Button>
                    <Button onClick={() => dispatch({ type: 'prevMonth' })}>&lt;</Button>
                    <Button onClick={() => dispatch({ type: 'SET_DATE_TO_TODAY' })}>{state.lang === "fr" ? "Aujourd'hui" : "Today"}</Button>
                    <Button onClick={() => dispatch({ type: 'nextMonth' })}>&gt;</Button>
                    <Button onClick={() => dispatch({ type: 'nextYear' })}>&gt;&gt;</Button>
                </SelectContainer>
            </ControlsContainer>
            <DaysContainer>
                {
                    days[state.lang].map((day) => {
                        return <Day>{day}</Day>
                    })
                }
            </DaysContainer>
        </HeaderContainer>
    );
}

export default Header;
