import React,{ useState, useEffect, useContext, useReducer } from 'react';
import styled from 'styled-components';

import { getMonth } from './DateProcess';

import Button from "../Button";
import { DateContext, dateReducer } from './DateProvider';
import Month from './Month';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
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
`;

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0px;
    margin: 0px;
`;

const Day = styled.div`
    font-size: 1.2rem;
    padding: 5px 10px;
    text-align: center;
    width: 100%;
`;

const controlsSpanStyle = {
    margin: "0px 5px",
    padding: "5px 10px",
    fontSize: "1.2rem",
    borderRadius: "5px",
};
const days = {
    fr: ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."],
    en: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."],
}

function Header(props) {
    const date = useContext(DateContext);
    const [state, dispatch] = useReducer(dateReducer, {
        date: {
            month: 1,
            year: 2023
        }
    });
    const language = "fr";

    return (
        <HeaderContainer>
            <ControlsContainer>
                <span style={controlsSpanStyle}> {getMonth(state.date.month)} - {state.date.year}</span>
                <SelectContainer>
                    <Button onClick={()=>dispatch({type:'prevMonth'})}>&lt;</Button>
                    <Button onClick={() => { }}>Aujourd'hui</Button>
                    <Button onClick={()=>dispatch({type:'nextMonth'})}>></Button>
                </SelectContainer>
            </ControlsContainer>
            <DaysContainer>
                {
                    days[language].map((day) => {
                        return <Day>{day}</Day>
                    })
                }
            </DaysContainer>
        </HeaderContainer>
    );
}

export default Header;
