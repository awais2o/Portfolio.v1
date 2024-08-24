import React from "react";
import { NavLink } from "react-router-dom";
const NewNav = ({ doaction }) => {
  return (
    <div className="text-white from-neutral-600 text-4xl h-full ">
      <ul className=" flex flex-col  ">
        <li className="my-9 hover:underline">
          <NavLink to="/" onClick={doaction}>
            Home
          </NavLink>
        </li>
        <li className="my-9  hover:underline">
          {" "}
          <NavLink to="/about" onClick={doaction}>
            About Us
          </NavLink>
        </li>
        <li className="my-9 hover:underline">
          {" "}
          <NavLink to="/services" onClick={doaction}>
            Services
          </NavLink>
        </li>
        <li className="my-9 hover:underline">
          <NavLink to="/projects" onClick={doaction}>
            Projects
          </NavLink>
        </li>
        <li className="my-9 hover:underline">
          <NavLink to="/contact" onClick={doaction}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NewNav;
