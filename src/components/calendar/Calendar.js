import React from "react";
import { useState, useEffect, setState, useRef, useCallback } from "react";
import styled from "styled-components";
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
    margin: 5px;
    background-color: rgb(250,250,250);
    color: rgb(80,80,80);
    width: 60%;
`;
const TODAY = new Date();

function Calendar(props) {
    const [month, setMonth] = React.useState(TODAY.getMonth());
    const [year, setYear] = React.useState(TODAY.getFullYear());
    const [currentMonth, setCurrentMonth] = React.useState(<Month month={month} year={year} />);

    useEffect(() => {
        setCurrentMonth(<Month month={month} year={year} />);
    }, [month, year]);

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
        console.log("nextMonth", month, year);
    }

    const previousMonth = () => {
        if (month === 0) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
            console.log("previousMonth", month, year);
        }

        return (
            <CalendarContainer>
                <Header nextMonth={nextMonth} previousMonth={previousMonth} month={month} year={year} />
                {currentMonth}
            </CalendarContainer>
        );
    }
}
export default Calendar;