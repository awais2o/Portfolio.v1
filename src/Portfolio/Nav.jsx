import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../index.css";
import NewNav from "./NewNav";
const Nav = () => {
  const [isNav, setNav] = useState(true);
  const headerCss = isNav
    ? "z-20 font-sans fixed left-0 right-0 top-0 w-screen  p-0 m-0 bg-transparent py-5  px-3 text-yellow-50  "
    : "z-20 font-sans fixed left-0 right-0 top-0 w-screen h-screen p-0 m-0  py-5  px-3 text-yellow-50  bg-red-500 ";
  const navCss = isNav
    ? "flex flex-row justify-between items-center px-4"
    : "flex flex-col justify-between items-center px-4";
  const PortCss = isNav ? "" : "py-9";
  const togglestate = () => {
    setNav(!isNav);
  };
  return (
    <>
      <header className={headerCss}>
        <nav className={navCss}>
          <div className="block md:hidden duration-1000 " onClick={togglestate}>
            {isNav && <img src="/images/menuClosed.svg" alt="" />}
            {!isNav && <img src="/images/menuOpened.svg" alt="" />}
          </div>

          <div className={PortCss}>
            <img
              src="https://see.fontimg.com/api/renderfont4/ZY73/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/UG9ydGZvbGlv/hemera-ii-demo-regular.png"
              className=""
              alt="None"
            />
          </div>
          <div className="hidden  w-3/6 min-w-max md:block ">
            <ul className=" flex flex-row justify-between ">
              <li className="mx-4 hover:underline">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-4  hover:underline">
                {" "}
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="mx-4 hover:underline">
                {" "}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="mx-4 hover:underline">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="mx-4 hover:underline">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          {isNav && (
            <div className="">
              <button className="bg-red-600 text-white rounded-2xl p-2 px-4 hover:bg-red-500">
                Lets Talk
              </button>
            </div>
          )}

          {!isNav && <NewNav doaction={togglestate} />}
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Nav;
