import React, { useState } from "react";
import logo from "../ui/logo.svg";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "lnr lnr-home" },
    { label: "Discover", slug: "discover", icon: "lnr lnr-list" },
    { label: "Categories", slug: "cates", icon: "lnr lnr-tag" },
    { label: "My Courses", slug: "my-courses", icon: "lnr lnr-briefcase" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];

  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            "aic link noul flex c333" +
            (currentPage == nav[i].slug ? " on" : "")
          }
        >
          <div className={"ico s20 " + nav[i].icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }

  return (
    <div className="sidebar rel">
      <a href="#" className="logo bl">
        <img src={logo} className="bl" />
      </a>
      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <div className="lnr lnr-database ico cfff s24" />

        <div className="lbl s15 fontb c333">
          Updated Courses
          <h2 className="author s13 c777">by Irwanto Wibowo</h2>
        </div>
      </div>

      <div className="stats flex aic">
        <div className="stats-box flex">
          <div className="ico ico-bullhorn s24 lnr lnr-bullhorn" />
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>

        <div className="stats-box flex aic jic">
          <div className="ico ico-hand s24 lnr lnr-hand" />
          <h2 className="val s15 c333 fontb">45.3%</h2>
          <h2 className="lbl s13 c777">complete</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cfff s24">
          <img src="http://placeimg.com/100/100/people" className="bl" />
        </div>

        <div className="lbl s15 fontb c333">
          Irwanto
          <h2 className="uname s13 c777">@irwanto1992</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
