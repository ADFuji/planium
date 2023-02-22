import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from "../Button";
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
    const [language, setLanguage] = useState("fr");
    const [month, setMonth] = useState(props.month);
    const [year, setYear] = useState(props.year);
    useEffect(() => {
        setLanguage("fr");
        setMonth(props.month);
        setYear(props.year);
    }, [props.language, props.month, props.year]);

    return (
        <HeaderContainer>
            <ControlsContainer>
                <span style={controlsSpanStyle}>{month} {year}</span>
                <SelectContainer>
                    <Button onClick={props.previousMonth}>&lt;</Button>
                    <Button onClick={() => { }}>{(language == "fr" ? "Aujourd'hui" : "Today")}</Button>
                    <Button onClick={props.nextMonth}>&gt;</Button>
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
