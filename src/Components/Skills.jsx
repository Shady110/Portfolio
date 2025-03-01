import Badge from "./badge";
import Svg from "./Svg";
import ToolBox from "./ToolBox";
import HTML from "../assets/html-1.svg";
import CSS from "../assets/css-3.svg";
import Bootstrap from "../assets/bootstrap-5-1.svg";
import Tailwind from "../assets/tailwindcss.svg";
import antDesign from "../assets/ant-design.svg";
import MaterialUi from "../assets/material-ui.svg";
import Laravel from "../assets/laravel-2.svg";
import Mysql from "../assets/mysql-logo-pure.svg";
import React from "../assets/react-2.svg";
import next from "../assets/nextjs-icon.svg";
import Javascript from "../assets/logo-javascript.svg";
import Git from "../assets/git-icon.svg";
import Github from "../assets/github-icon-1.svg";
import Figma from "../assets/figma-icon (1).svg";
import Postman from "../assets/postman-icon-svgrepo-com.svg";
import TextBox from "./TextBox";
import ProgressBar from "./ProgressBar";
function Skills() {
  return (
    <>
      <Badge
        text={
          <>
            <Svg
              path={
                "M397-95H211q-46.45 0-81.23-34.77Q95-164.55 95-211v-181q32-2 50.5-27.5T164-477q0-32-18.5-57.5T95-562v-181q0-47.45 34.77-81.72Q164.55-859 211-859h136q11-49 47.27-79 36.28-30 82.5-30 46.23 0 82.73 29.84Q596-908.32 607-859h136q47.45 0 81.72 34.28Q859-790.45 859-743v136q49 11 79 47.27 30 36.28 30 82.5 0 46.23-29.84 82.73Q908.32-358 859-347v136q0 46.45-34.28 81.23Q790.45-95 743-95H557q1-38-22.63-64.5T477.12-186q-33.62 0-57.37 26.62Q396-132.75 397-95Z"
              }
            />{" "}
            Skills
          </>
        }
      />
      <section className="flex flex-col gap-10 pt-10">
        <div className="w-full">
          <h2 className="text-4xl font-semibold py-5 uppercase">
            Technologies
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-3">
            <ToolBox image={HTML} title={"HTML"} />
            <ToolBox image={CSS} title={"CSS"} />
            <ToolBox image={Javascript} title={"JavaScript"} />
            <ToolBox image={Bootstrap} title={"Bootstrap"} />
            <ToolBox image={Tailwind} title={"Tailwind"} />
            <ToolBox image={antDesign} title={"Ant Design"} />
            <ToolBox image={MaterialUi} title={"Material UI"} />
            <ToolBox image={React} title={"React.JS"} />
            <ToolBox image={next} title={"Next.JS"} />
            <ToolBox image={Laravel} title={"Laravel"} />
            <ToolBox image={Mysql} title={"MySQL"} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-semibold py-5 uppercase">Tools</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-3">
            <ToolBox image={Git} title={"Git"} />
            <ToolBox image={Github} title={"GitHib"} />
            <ToolBox image={Figma} title={"Figma"} />
            <ToolBox image={Postman} title={"Postman"} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-semibold py-5 uppercase">Concepts</h2>
          <div className="flex flex-wrap justify-start gap-3">
            <TextBox concept={"Responsive Web Design"} />
            <TextBox concept={"Component-Based Architecture"} />
            <TextBox concept={"State Management"} />
            <TextBox concept={"DOM Manipulation"} />
            <TextBox concept={"API Integration"} />
            <TextBox concept={"UI/UX Principles"} />
            <TextBox concept={"Server-Side Development"} />
            <TextBox concept={"RESTful APIs"} />
            <TextBox concept={"Database Management"} />
            <TextBox concept={"Authentication & Authorization"} />
            <TextBox concept={"CRUD Operations"} />
            <TextBox concept={"Deployment"} />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-semibold py-5 uppercase">Languages</h2>
          <div className="flex flex-col justify-start gap-3 md:w-3/4 xs:w-full">
            <ProgressBar title={"Arabic"} value={99} />
            <ProgressBar title={"English"} value={80} />
            <ProgressBar title={"German"} value={15} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
