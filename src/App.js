import React from "react";
import styled from "styled-components";

import MenuBar from "./components/MenuBar";

import tags from "./ParseJSON";
import TagsList from "./components/TagsList/TagsList";
import Tag from "./components/TagsList/Tag";

import { DateProvider } from "./components/calendar/DateProvider";
import Calendar from "./components/calendar/Calendar";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

function App() {
  //<TagsList tags={tags}/>
  return (
    <AppContainer>
      <MenuBar />
      <DateProvider>
        <Calendar />
      </DateProvider>
    </AppContainer>
  );
}

export default App;
