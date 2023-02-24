import React from "react";
import tags from "./ParseJSON";
import TagsList from "./components/TagsList/TagsList";
import Tag from "./components/TagsList/Tag";

import { DateProvider } from "./components/calendar/DateProvider";
import Calendar from "./components/calendar/Calendar";

import { render } from "@testing-library/react";

function App() {
  const style = {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "sans-serif",
    display: "flex",
  };
  //<TagsList tags={tags}/>
  return (
    <div className="App" style={style}>
      
      <DateProvider>
        <Calendar />
      </DateProvider>
    </div>
  );
}

export default App;
