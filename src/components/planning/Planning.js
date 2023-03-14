import React from "react";
import styled from "styled-components";
import Events from "./Events";

const PlanningContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: rgb(80,80,80);
    user-select: none;
    @media (min-width: 320px) {
        width: 100%;
        height: 100%;
    }
`;
function Planning(props) {
    const [details, setDetails] = React.useState(null) // [this.state.details, this.setState({ details: e })
    function handleEventClick(e) {
        setDetails(e);
    }
    function closeDetails() {
        setDetails(null);
    }
    return (
        <React.Fragment>
            <PlanningContainer theme={props.theme}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Events onEventClick={handleEventClick} onEventClose={closeDetails} />
                    {details}
                </div>
            </PlanningContainer>
        </React.Fragment>
    )
}

export default Planning;