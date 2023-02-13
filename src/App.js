import React from "react";
import tags from "./ParseJSON";
import TagsList from "./components/TagsList/TagsList";
import Tag from "./components/TagsList/Tag";

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

  return (
    <div className="App" style={style}>
      <TagsList tags={tags}/>
      <Calendar />
    </div>
  );
}

export default App;
