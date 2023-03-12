import React from "react";
import styled from "styled-components";

const VerticalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    &:first-child {
        padding: 10px;
        margin-right: 10px;
        border-right: 2px solid #e0e0e0;
    }
`;
const EventContainer = styled.div`
    display: flex;
    height: 130px;
    flex-direction: row;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e0e0e0;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }
    @media (min-width: 320px) {
        width: 100%;
        height: max-content;
    }
`;
const EventTitle = styled.h1`
    margin: 0;
    margin-top: 8px;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 700;
    @media (min-width: 320px) {
        font-size: 1.1rem;
        max-width: 300px;
    }
`;
const EventDescription = styled.p`
    margin: 0;
    padding: 0;
    max-width: 1000px;
    display: none;
    @media (min-width: 320px) {
        
    }
    @media (min-width: 1920px) {
        display: block;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
`;
const EventDate = styled.p`
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    font-weight: 300;
    font-style: italic;
`;
const EventDisplayContainer = styled.div`
    position absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    &:hover {
        background-color: rgba(0,0,0,0.05);
        cursor: pointer;
    }
    @media (min-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    @media (min-width: 700px) {
        background-color: transparent;
        position: static;
        width: 30%;
        height: 100%;
    }
    @media (min-width: 1920px) {
        
        
        
    }
    transition: all 0.5s ease;
`;
const Image = styled.img`
    aspect-ratio: 16/9;
    object-fit: cover;
    @media (min-width: 320px) {
        width: 100%;
        height: 100%;
    }
    @media (min-width: 1920px) {
        width: 100%;
        height: 100%;
    }
`;

const Taglabel = styled.span`
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 15px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #e0e0e0;
    color: #424242;
    font-weight: 600;
    @media (min-width: 320px) {
        font-size: 0.9rem;
        max-width: 180px;
    }
    @media (min-width: 1920px) {
        font-size: 1.1rem;
        max-width: 400px;
    }
    @media (min-width: 2400px) {
        max-width: 450px;
    }
        
`;
function Event({ props }) {
    function handleEventClick(e) {
        props.onEventClick(<EventDetails title={props.title} description={props.description} thumbnail={props.thumbnail} />);
    }
    const tags = (() => {
        const ret = [];
        props.tags.forEach((tag) => {
            console.log(tag.id.toString());
            ret.push(<Taglabel id={tag.id.toString()}>{tag.label}</Taglabel>);
        });
        return ret;
    })();
    return (
        <EventContainer onClick={handleEventClick}>
            <VerticalDiv>
                <EventDate>{props.firstDate}</EventDate>
                <EventDate>{props.lastDate}</EventDate>
            </VerticalDiv>
            <VerticalDiv>
                <EventTitle>{props.title}</EventTitle>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "start", flexWrap: "wrap" }}>{tags}</div>
                <EventDescription thumbnail={props.thumbnail}>{props.description}</EventDescription>
            </VerticalDiv>
        </EventContainer>
    )
}

function EventDetails(props) {
    return (
        <EventDisplayContainer>
            <VerticalDiv>
                <Image src={props.thumbnail} />
                <EventTitle>{props.title}</EventTitle>
                <EventDescription>{props.description}</EventDescription>
            </VerticalDiv>
        </EventDisplayContainer>
    )
}

export default Event;
export { EventDetails };