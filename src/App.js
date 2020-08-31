import React from "react";
import "./css/props.css";
import "./css/App.css";
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="app-content">
        {/* <HomePage /> */}
        <CoursePage />
      </div>
      {/* <Rightbar /> */}
    </div>
  );
}

export default App;
