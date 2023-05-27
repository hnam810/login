import React from "react";
import "./App.css";
import styled from "styled-components";
import Login from "./modules/Login";

const App = () => {
  const AppContainer = styled.div`
    height: 100%;
  `;
  return <AppContainer><Login/></AppContainer>;
};

export default App;
