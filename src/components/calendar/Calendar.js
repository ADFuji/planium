import React from "react";
import styled from "styled-components";
import Month from "./Month";
/**
 * Composant pour afficher le calendrier
 * @param {*} props 
 * @returns 
 */
function Calendar(props) {
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    const style = {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: "0",
        padding: "0",
        backgroundColor: "grey",
        overflow: "auto",
    }
    const ov = {
        overflow: "auto",
        height: "300px"
    }
    const year = [];
    for(let i=1;i<=12;i++){
        year.push(<Month start={"01/"+(i<10?"0"+i:i)+"/2021"} end={"31/"+(i<10?"0"+i:i)+"/2021"} />);
    }

    const Th = styled.th`
        background-color: #4CAF50;
        color: white;
        padding: 5px;
        max-width: 20px;
        max-height: 50px;
        text-align: center;
    `;
    const styleThead = {
        position: "sticky",
        top: "0",
    }

    return (
        <div style={style}>
            <table>
                <thead style={styleThead}>
                    {
                        days.map((day) => (
                            <Th>{day}</Th>
                        ))
                    }
                </thead>
                <tbody style={ov}>
                    <Month start={"01/01/2023"} end={"31/01/2023"} />
                    <Month start={"01/02/2023"} end={"31/02/2023"} />
                    <Month start={"01/03/2023"} end={"31/03/2023"} />
                    <Month start={"01/04/2023"} end={"31/04/2023"} />
                    <Month start={"01/05/2023"} end={"31/05/2023"} />
                    <Month start={"01/06/2023"} end={"31/06/2023"} />
                    <Month start={"01/07/2023"} end={"31/07/2023"} />
                    <Month start={"01/08/2023"} end={"31/08/2023"} />
                    <Month start={"01/09/2023"} end={"31/09/2023"} />
                    <Month start={"01/10/2023"} end={"31/10/2023"} />
                    <Month start={"01/11/2023"} end={"31/11/2023"} />
                    <Month start={"01/12/2023"} end={"31/12/2023"} />
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;