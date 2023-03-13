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
        const p = {
            title: props.title,
            description: props.description,
            thumbnail: props.thumbnail,
            firstDate: props.firstDate,
            lastDate: props.lastDate,
            firstTimeStart: props.firstTimeStart,
            firstTimeEnd: props.firstTimeEnd,
            address: props.address,
            postalCode: props.postalCode,
            city: props.city,
            department: props.department,
            region: props.region,
        }
        props.onEventClick(<EventDetails props={p} onEventClose={() => props.onEventClose()} active={true} />);
    }
    const tags = (() => {
        const ret = [];
        props.tags.forEach((tag) => {
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
    @media (min-width: 2400px) {
        width: 40%;
    }
    transition: all 0.5s ease;
    .background {
        position: relative;
        @media (min-width: 320px) {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
            width: 90%;
        }
        @media (min-width: 700px) {
            width: 100%;
            box-shadow: none;
        }
    }
`;

const EventDetailsHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
`;

const EventDetailsDescription = styled.p`
    margin: 0;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;
    @media (min-width: 320px) {
        font-size: 0.9rem;
    }
    @media (min-width: 1920px) {
        font-size: 1.1rem;
    }
`;

const EventDetailsAddress = styled.ul`
    margin: 0;
    padding: 10px;
    font-size: 1.1rem;
    font-weight: 300;
    @media (min-width: 320px) {
        font-size: 0.9rem;
    }
    @media (min-width: 1920px) {
        font-size: 1.1rem;
    }
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
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

const Close = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 5px 10px;
    border-radius: 50%;
    background-color: #e0e0e0;
    color: #424242;
    font-weight: 600;
    @media (min-width: 320px) {
        font-size: 0.9rem;
    }
    @media (min-width: 1920px) {
        font-size: 1.1rem;
    }
    @media (min-width: 2400px) {
        max-width: 450px;
    }
    &:hover {
        background-color: #424242;
        color: #fff;
    }
    transition: all 0.5s ease;
`;

function EventDetails(props) {
    return (
        <EventDisplayContainer>
            <div className="background">
                <EventDetailsHeader>
                    <Close onClick={() => props.onEventClose()}>X</Close>
                    <Image src={props.props.thumbnail} />
                    <EventTitle>{props.props.title}</EventTitle>
                </EventDetailsHeader>
                <EventDetailsDescription>{props.props.description}</EventDetailsDescription>
                <EventDetailsAddress>
                    <li>{props.props.address}</li>
                    <li>{props.props.postalCode} {props.props.city}</li>
                    <li>{props.props.department} {props.props.region}</li>
                </EventDetailsAddress>
            </div>
        </EventDisplayContainer>
    );
}

export default Event;
export { EventDetails };