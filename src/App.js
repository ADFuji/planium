import React from "react";
import styled from "styled-components";

import MenuBar from "./components/MenuBar";

import tags from "./ParseJSON";
import TagsList from "./components/TagsList/TagsList";
import Tag from "./components/TagsList/Tag";

import { DateProvider } from "./components/calendar/DateProvider";
import Calendar from "./components/calendar/Calendar";
import Planning from "./components/planning/Planning";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  //<TagsList tags={tags}/>
  const [view, setView] = React.useState(true);
  const [calendar, setCalendar] = React.useState(<Calendar/>);
  const [planning, setPlanning] = React.useState(<Planning/>);
  function changeViews(){
    setView(!view);
  }
  return (
    <AppContainer>
      <MenuBar changeView={changeViews} />
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

        <DateProvider>
        {
          view ? calendar : planning
        }
        </DateProvider>
      </div>
    </AppContainer>
  );
}

export default App;
