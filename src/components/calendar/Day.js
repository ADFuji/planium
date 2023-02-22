import React from "react";

import styled from "styled-components";

const ContainerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 70px;
height: 100%;
margin: 0;
padding: 0;
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
const CenteredDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0;
padding: 0;
`;
const todayStyle = {
    backgroundColor: "red",
    color: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginTop:"3px"
};

function Day(props)
{
    const [day, setDay] = React.useState(props.day);
    const [hasEvent, setHasEvent] = React.useState(props.hasEvent);

    if(day=="")
    {
        return (
            <div>
            </div>
        );
    }
    console.log(props.day, props.month, props.year);
    console.log(props.today.getDate(), props.today.getMonth()+1, props.today.getFullYear());
    const isTODAY = day==props.today.getDate() && props.month==props.today.getMonth()+1 && props.year==props.today.getFullYear();

    return (
        <ContainerStyle style={{borderTop: day!=="" ? "1px solid rgb(100,100,100)" : "1px transparent"}}>
            <CenteredDiv style={isTODAY ? todayStyle : {}}><p>{day}</p></CenteredDiv>
            {
                day!="" && hasEvent ? <Span style={{backgroundColor: "rgb(100,100,100)", width: "1px", height: "1px", borderRadius: "50%", marginTop:"6px"}}></Span> : <Span style={{width: "2px", height: "2px", borderRadius: "50%", marginTop:"3px"}}></Span>
            }
        </ContainerStyle>
    );
}

export default Day;