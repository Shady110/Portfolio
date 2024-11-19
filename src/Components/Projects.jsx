import Badge from "./badge";
import Svg from "./Svg";
import WebpageTemplate from "./WebpageTemplate";

function Projects() {
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
            Projects
          </>
        }
      />
      <div className="grid grid-cols-3 gap-5 py-10">
        <WebpageTemplate />
        <WebpageTemplate />
        <WebpageTemplate />
        <WebpageTemplate />
      </div>
    </>
  );
}

export default Projects;