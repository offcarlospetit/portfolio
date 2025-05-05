import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";
import PrivacyPolicy from "./components/privacy";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div
          id="container-wrap"
          style={{ maxWidth: "1170px", margin: "0 auto" }}
        >
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <Timeline></Timeline>
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
