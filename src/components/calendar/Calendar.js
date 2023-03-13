import React from "react";
import { useState, useEffect, setState, useRef, useCallback } from "react";
import styled from "styled-components";
import { CalendarContext } from "./CalendarProvider";

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
    max-width: 100vw;
    max-height: 100vh;
    user-select: none;
`;
const TODAY = new Date();

function Calendar(props) {
    const { state } = React.useContext(CalendarContext);
    const [previous, setPrevious] = useState(<Month previous={true} />);
    const [current, setCurrent] = useState(<Month />);
    const [next, setNext] = useState(<Month next={true} />);
    const [thisMonth, setThisMonth] = useState(<Month month={TODAY.getMonth()} year={TODAY.getFullYear()} />);

    return (
        <CalendarContainer>
            <Header />
            <Month />
            {state.modal}
        </CalendarContainer>
    );

}
export default Calendar;