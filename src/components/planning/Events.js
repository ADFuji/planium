import React from "react";
import styled from "styled-components";
import { events } from '../../ParseJSON';

const EventContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
`;
function Event(props){
    return(
        <EventContainer>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </EventContainer>
    )
}
const EventsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 55px);
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e0e0e0;
    overflow-y: scroll;
`;

function Events(props)
{
    const _events =((events)=>{
        let ret = [];
        events.forEach((event)=>{
            const title = event.title;
            let description = event.description;
            try{
                console.log(description["fr"]);
            }
            catch(e){
                description = {fr: "No description"};
            }
            ret.push(<Event title={title["fr"]} description={description["fr"]} />);
        })
        return ret
    })(events)
    
    return(
        <EventsContainer>
            {_events}
        </EventsContainer>
    )
}

export default Events;