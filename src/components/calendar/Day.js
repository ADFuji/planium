import React from "react";

import styled from "styled-components";


function Day(props)
{
    const [day, setDay] = React.useState(props.day);
    const [hasEvent, setHasEvent] = React.useState(props.hasEvent);

    const ContainerStyle = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: #f5f5f5;
    `;

    const Span = styled.span`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5px;
        padding: 5px;
        height: 5px;
    `;
    if(day=="")
    {
        return (
            <div>
            </div>
        );
    }
    return (
        <ContainerStyle>
            <p>{day}</p>
            {
                day!="" && hasEvent ? <Span>*</Span> : <Span></Span>
            }
        </ContainerStyle>
    );
}

export default Day;