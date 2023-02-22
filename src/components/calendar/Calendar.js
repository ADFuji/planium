import React from "react";
import styled from "styled-components";
import Month from "./Month";


/**
 * Composant pour afficher le calendrier
 * @param {*} props 
 * @returns 
 */
const Th = styled.th`
        color: white;
        width: 70px;
        padding: 0;
        margin: 0;
        max-height: 50px;
        text-align: center;
    `;
function Calendar(props) {
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    const style = {
        display: "flex",
        flexDirection: "column",
        height: "40%",
        margin: "0",
        padding: "0",
        
    }
    const ov = {
        height: "500px",
        overflowY: "scroll",
        backgroundColor: "rgb(250,250,250)",
    }
    const year = [];
    for(let i=2023; i<2024; i++){
        for(let j=1; j<=12; j++){
            year.push(<Month start={`01/${j<10 ? "0"+j : j}/${i}`} end={`31/${j<10 ? "0"+j : j}/${i}`} />);
        }
    }

    const styleThead = {
        backgroundColor: "rgb(200,200,200)",
        height: "25px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "20px",
    }

    return (
        <div style={style}>
            <div>
                <div style={styleThead}>
                    {
                        days.map((day) => (
                            <Th>{day}</Th>
                        ))
                    }
                </div>
                <div style={ov}>
                    {year}
                </div>
            </div>
        </div>
    );
}

export default Calendar;