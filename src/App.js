import React, { Component } from "react";
import ListEmployees from "./components/ListEmployees";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/headerComponent";
import CreateEmployee from "./components/CreateEmployee";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route path="/" element={<ListEmployees />} />
              <Route path="/employees" element={<ListEmployees />} />
              <Route path="/addEmployee" element={<CreateEmployee />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
