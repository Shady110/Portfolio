import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./Sections/SideBar";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";
import React from "react";
import ProfileCard from "./Sections/ProfileCard";
import Profile from "./Sections/Profile";

function App() {
  return (
    <>
      <section className="lg:h-screen md:p-16 xs:p-3 flex xs:flex-col lg:flex-row justify-center items-start gap-2 ">
        <div className="xs:w-full lg:w-1/12">
          <SideBar />
        </div>
        <div className="xs:w-full xs:h-96 lg:h-full lg:w-4/12 bg-base-200 shadow-xl rounded-xl">
          <ProfileCard />
        </div>
        <div className="xs:w-full xs:h-3/6 md:h-full lg:w-7/12 bg-base-200 shadow-xl rounded-xl lg:overflow-y-scroll scrollbar-thin scroll-smooth">
          <Profile />
        </div>
      </section>
    </>
  );
}

export default App;
