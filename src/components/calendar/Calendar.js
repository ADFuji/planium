import React from "react";
import { useState, useEffect, setState, useRef, useCallback } from "react";
import styled from "styled-components";

import { DateContext, dateReducer } from "./DateProvider";
import Header from "./Header";
import Month from "./Month";


/**
 * Composant pour afficher le calendrier
 * @param {*} props 
 * @returns 
 */

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(250,250,250);
    color: rgb(80,80,80);
    width: 100%;
    min-width: 300px;
    max-width: 100vw;
    user-select: none;
`;
const TODAY = new Date();

function Calendar(props) {
    const date = React.useContext(DateContext);
    const [previous, setPrevious] = useState(<Month previous={true} />);
    const [current, setCurrent] = useState(<Month />);
    const [next, setNext] = useState(<Month next={true} />);
    const [thisMonth, setThisMonth] = useState(<Month month={TODAY.getMonth()} year={TODAY.getFullYear()} />);

    return (
        <CalendarContainer>
            <Header />
            <Month />
        </CalendarContainer>
    );

}
export default Calendar;