import SideBarButton from "../Components/SideBarButton";
import ThemeSwitcher from "../Components/ThemeSwitcher";

function SideBar() {
  return (
    <>
      <section className=" flex xs:flex-row lg:flex-col justify-center items-center xs:gap-2 md:gap-4 w-1/2 mx-auto h-full">
        <div className="flex justify-center items-center bg-white dark:glass p-2 rounded-full shadow-2xl">
          <ThemeSwitcher />
        </div>
        <div className="flex xs:flex-row  lg:flex-col justify-center items-center gap-3 bg-white dark:glass p-2 rounded-full shadow-2xl">
          {/* Profile */}
          <SideBarButton
            help={"Profile"}
            path={
              "M480.16-502Q395-502 336.5-561T278-704.5q0-84.5 58.34-142.5t143.5-58q85.16 0 143.66 57.89T682-704q0 84-58.34 143t-143.5 59ZM114-222v-23q0-46.47 23.41-84.51Q160.81-367.56 201-387q66-34 136.31-51t142.5-17Q554-455 624-438t135 50q40.19 19.44 63.59 56.99Q846-293.47 846-245v23q0 58.4-39.5 97.2Q767-86 710-86H250q-57 0-96.5-38.8T114-222Z"
            }
          />
          {/* Skills */}
          <SideBarButton
          help={"Skills"}
            path={
              "M397-95H211q-46.45 0-81.23-34.77Q95-164.55 95-211v-181q32-2 50.5-27.5T164-477q0-32-18.5-57.5T95-562v-181q0-47.45 34.77-81.72Q164.55-859 211-859h136q11-49 47.27-79 36.28-30 82.5-30 46.23 0 82.73 29.84Q596-908.32 607-859h136q47.45 0 81.72 34.28Q859-790.45 859-743v136q49 11 79 47.27 30 36.28 30 82.5 0 46.23-29.84 82.73Q908.32-358 859-347v136q0 46.45-34.28 81.23Q790.45-95 743-95H557q1-38-22.63-64.5T477.12-186q-33.62 0-57.37 26.62Q396-132.75 397-95Z"
            }
          />
          {/* Projects */}
          <SideBarButton
          help={"Projects"}
            path={
              "M178-98q-53.82 0-90.91-37.09Q50-172.18 50-226v-391q0-53.83 37.09-90.91Q124.18-745 178-745h116v-72.21q0-53.92 37.11-90.85Q368.23-945 422.09-945h116.17q53.87 0 90.8 37.09Q666-870.83 666-817v72h116q53.83 0 90.91 37.09Q910-670.83 910-617v391q0 53.82-37.09 90.91Q835.83-98 782-98H178Zm244-647h116v-72H422v72Z"
            }
          />
          {/* Contact */}
          <SideBarButton
          help={"Contact"}
            path={
              "M175-161q-34 15-64-5.5T81-223v-148l375-111L81-592v-147q0-36 30-56.5t64-6.5l607 258q41 18 41 63t-41 62L175-161Z"
            }
          />
        </div>
      </section>
    </>
  );
}

export default SideBar;
