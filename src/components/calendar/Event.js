import React, { useState } from 'react';
import styled from 'styled-components';
export default function Event(props){
    //add styled components for className event
    const Event = styled.div`
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    `;
    return (
        <Event className="event">
            <h2>{props.event.title.fr}</h2>
            <p>{props.event.description.fr}</p>
            <img src={props.event.image} alt={props.event.title.fr} />
        </Event>
    );
}