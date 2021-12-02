import React, { Component } from "react";
import ListEmployees from "./components/ListEmployees";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <ListEmployees />
      </div>
    );
  }
}
