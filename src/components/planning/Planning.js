import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import Events from "./Events";
import { EventDetails } from "../Event";


const PlanningContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(250,250,250);
    color: rgb(80,80,80);
    width: 100%;
    user-select: none;
`;
function Planning(props) {
    const [details, setDetails] = React.useState(null) // [this.state.details, this.setState({ details: e })
    function handleEventClick(e) {
        setDetails(e);
    }
    return (
        <React.Fragment>
            <PlanningContainer>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Events onEventClick={handleEventClick} />
                    {details}
                </div>
            </PlanningContainer>

        </React.Fragment>
    )
}

export default Planning;