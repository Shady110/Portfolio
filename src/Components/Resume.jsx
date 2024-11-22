import Badge from "./badge";
import CourseBox from "./CourseBox";
import EducationBox from "./EducationBox";
import Svg from "./Svg";
import WorkBox from "./WorkBox";

function Resume() {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row gap-3">
        <div className="card grid flex-grow md:w-1/2 xs:w-full">
          <Badge
            text={
              <>
                <Svg
                  path={
                    "M840-320v-236L518-381q-18 10-38 10t-38-10L104-565q-11-6-15.5-15T84-600q0-11 4.5-20t15.5-15l338-184q9-5 18.5-7.5T480-829q10 0 19.5 2.5T518-819l381 208q10 5 15.5 14.5T920-576v256q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320ZM442-141 242-249q-20-11-31-30t-11-41v-152l242 131q18 10 38 10t38-10l242-131v152q0 22-11 41t-31 30L518-141q-9 5-18.5 7.5T480-131q-10 0-19.5-2.5T442-141Z"
                  }
                />{" "}
                Education
              </>
            }
          />
          <ul className="flex flex-col gap-5 py-5">
            <EducationBox
              education={"B.A. in Computer Science"}
              place={"Shorouk Academy"}
              date={"(2020-2024)"}
              grade={"very good with honors"}
              details={
                <>
                  ranked <span className="font-black">10th</span> on my class
                </>
              }
            />
          </ul>
          <Badge
            text={
              <>
                <Svg
                  path={
                  "M360-360H236q-24 0-35.5-21.5T203-423l299-430q10-14 26-19.5t33 .5q17 6 25 21t6 32l-32 259h155q26 0 36.5 23t-6.5 43L416-100q-11 13-27 17t-31-3q-15-7-23.5-21.5T328-139l32-221Z"
                  }
                />
                Courses
              </>
              
            }
          />
          <ul className="flex flex-col gap-5 py-5">
            <CourseBox
              course={"Ful Stack diploma"}
              company={"Kimit innovation technology"}
              date={"Mar 2023 - Nov 2023"}
            />
            <CourseBox
              course={
                "The Ultimate React Course 2024: React, Next.js, Redux & More"
              }
              company={"Udemy"}
              date={"nov 2024 - now"}
            />
          </ul>
        </div>

        <div className="card flex  md:w-1/2 xs:w-full">
          <Badge
            text={
              <>
                <Svg
                  path={
                    "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-160h200q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160h320q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z"
                  }
                />{" "}
                Work Experince
              </>
            }
          />
          <ul className="flex flex-col gap-5 py-5">
            <WorkBox
              job={"Full Stack Mentor"}
              comapny={"Kimit Innovation"}
              start_date={"nov 2023"}
              end_date={"now"}
            />
            <WorkBox
              job={"Web Developer"}
              comapny={"freelance"}
              start_date={"Jul 2024"}
              end_date={"now"}
            />
            <WorkBox
              job={"Graphic designer"}
              comapny={"freelance"}
              start_date={"mar 2023"}
              end_date={"now"}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
