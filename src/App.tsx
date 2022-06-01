import React from "react";
import { Global } from "@emotion/react";
import global from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <Global styles={global} />
      <div className="App">a</div>
    </>
  );
}

export default App;
