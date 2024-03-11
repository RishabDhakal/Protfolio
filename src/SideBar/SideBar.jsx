import React from "react";
import { Link } from "react-router-dom";
import '../Styling/Sidebar.scss';
import MyImg1 from "../images/myimagetop.jpg"

const SideBar = () => {
  const link = [
    {
      name: "About Me",
      link: "",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Education",
      link: "education",
    },
    {
      name: "Blogs",
      link: "blogs",
    },
  ];
  return (
    <>
      <div className="Sidebar">
        <div className="Sidebar-info">
          <img src={MyImg1} alt="" />
          <h2>Rishab Dhakal</h2>
          <p><span>WEB DEVELOPER</span> IN NEPAL</p>
        </div>
        <div className="link">
            {link.map(({ name, link }) => (
              <Link key={Math.random()} to={link}>
                {name}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
