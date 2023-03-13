import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppProvider";
import MenuBar from "./components/MenuBar";
import LeftSideMenu from "./components/LeftSideMenu";

import TagsList from "./components/TagsList/TagsList";
import Calendar from "./components/calendar/Calendar";
import Planning from "./components/planning/Planning";
import { CalendarProvider } from "./components/calendar/CalendarProvider";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  @media (min-width: 320px) {
    flex-direction: column;
  }
  @media (min-width: 700px) {
    flex-direction: row;
  }
  @media (min-width: 1920px) {
    flex-direction: row;
  }
`;

function App() {
  const [view, setView] = React.useState(true);
  const [calendar, setCalendar] = React.useState(<Calendar />);
  const [planning, setPlanning] = React.useState(<Planning />);
  const { state } = React.useContext(AppContext);
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
      <AppDiv>
        <LeftSideMenu visible={menuVisible}>
          <div className="tags-list">
            <TagsList />
          </div>
          <div className="footer">
            <ul>
              <li>Settings</li>
              <li>Help</li>
              <li>About</li>
            </ul>
          </div>
        </LeftSideMenu>
        <CalendarProvider>
          {
            view ? calendar : planning
          }
        </CalendarProvider>
      </AppDiv>
    </AppContainer>
  );
}

export default App;
