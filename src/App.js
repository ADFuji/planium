import React from "react";
import styled from "styled-components";

import MenuBar from "./components/MenuBar";
import LeftSideMenu from "./components/LeftSideMenu";
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
  const [calendar, setCalendar] = React.useState(<Calendar />);
  const [planning, setPlanning] = React.useState(<Planning />);
  function changeViews() {
    setView(!view);
  }
  const [menuVisible, setMenuVisible] = React.useState(false);
  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }
  return (
    <AppContainer>
      <MenuBar changeView={changeViews} toggleMenu={toggleMenu} />

      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row" }}>
        <LeftSideMenu visible={menuVisible}>
          <TagsList tags={tags} />
        </LeftSideMenu>
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
