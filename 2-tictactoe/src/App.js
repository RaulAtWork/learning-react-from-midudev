import React from "react";
import "./index.css";
import TicTacToe from "./components/TicTacToe";
import { Provider } from "react-redux";
import store from "./app/storage";

function App() {
  return (
    <Provider store={store}>
      <h1>TIC TAC TOE</h1>
      <TicTacToe />
    </Provider>
  );
}

export default App;
