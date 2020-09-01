import React from "react";
import "./css/props.css";
import "./css/App.css";
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";

import { Route, NavLink, HashRouter } from "react-router-dom";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";

function App() {
  return (
    <div className="App flex">
      <HashRouter>
        <Sidebar />
        <div className="app-content">
          <Route path="/" component={HomePage} exact />
          <Route path="/course/:courseid" component={CoursePage} />
          <Route path="/discover" component={DiscoverPage} />
          <Route path="/categories" component={CategoriesPage} />
          <Route path="/my-courses" component={MyCoursesPage} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
