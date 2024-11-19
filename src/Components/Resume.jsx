import Badge from "./badge";
import Svg from "./Svg";
import TimelineEnd from "./TimelineEnd";
import TimelineMiddle from "./TimelineMiddle";
import TimelineStart from "./TimelineStart";

function Resume() {
  return (
    <>
      <Badge
        text={
          <>
            <Svg
              path={
                "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z"
              }
            />{" "}
            Work Experience
          </>
        }
      />
        <ul className="timeline timeline-vertical lg:timeline-horizontal overflow-x-scroll scrollbar-none scroll-smooth flex  justify-start lg:justify-center p-0 m-0">
          <TimelineStart
            Time_Interval={"NOV 2023 - now"}
            job={"Full Stack Mentor"}
            company={"Kimit Innovation Technology"}
            description={
              "Guided aspiring developers in mastering front-end and back-end technologies, focusing on industry best practices and project-based learning."
            }
          />
          <TimelineEnd
            Time_Interval={"Jul 2024 - now"}
            job={"Freelancer"}
            description={
              "Developed responsive, user-friendly websites and web applications, delivering tailored solutions for diverse client needs"
            }
          />
        </ul>
      
    </>
  );
}

export default Resume;
