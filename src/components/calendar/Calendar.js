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
    margin: 5px;
    background-color: rgb(250,250,250);
    color: rgb(80,80,80);
    width: 60%;
`;
const TODAY = new Date();

function Calendar(props) {
    const date = React.useContext(DateContext);

    return (
        <CalendarContainer>
            <Header/>
            <Month previous={true}/>
            <Month/>
            <Month next={true}/>
        </CalendarContainer>
    );
    
}
export default Calendar;