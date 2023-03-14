import React from "react";
import styled from "styled-components";
import MenuBar from "./components/MenuBar";
import LeftSideMenu from "./components/LeftSideMenu";
import { AppContext } from "./AppProvider";
import TagsList from "./components/TagsList/TagsList";
import Calendar from "./components/calendar/Calendar";
import Planning from "./components/planning/Planning";
import { CalendarProvider } from "./components/calendar/CalendarProvider";
import ToggleSwitch from "./components/ToggleSwitch";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme === "light" ? "#f5f5f5" : "#03373a"};
  color: ${props => props.theme === "light" ? "#1e1e1e" : "#f5f5f5"};
`;

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.theme === "light" ? "#f5f5f5" : "#011617"};
  color: ${props => props.theme === "light" ? "#1e1e1e" : "#f5f5f5"};
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
  const { state, dispatch } = React.useContext(AppContext);
  const [view, setView] = React.useState(true);
  const [calendar] = React.useState(<Calendar theme={state.theme} />);
  const [planning] = React.useState(<Planning theme={state.theme} />);
  function changeViews() {
    setView(!view);
  }
  const [menuVisible, setMenuVisible] = React.useState(false);
  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <AppContainer theme={state.theme}>
      <MenuBar changeView={changeViews} toggleMenu={toggleMenu} />
      <AppDiv theme={state.theme}>
        <LeftSideMenu visible={menuVisible}>
          <div className="tags-list">
            <TagsList />
          </div>
          <div className="footer">
            <ul>
              <li><ToggleSwitch iconTrue="FR" iconFalse="EN" onChange={() => dispatch({ type: "CHANGE_LANG" })} /></li>
              <li><ToggleSwitch iconTrue="🌞" iconFalse="🌙" onChange={() => dispatch({ type: "CHANGE_THEME" })} /></li>
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
