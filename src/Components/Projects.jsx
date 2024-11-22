import Badge from "./badge";
import ProjectBox from "./ProjectBox";
import Svg from "./Svg";
import WebpageTemplate from "./WebpageTemplate";
import moldndie from "../assets/moldndie.png";
import medeg from "../assets/medeg.png";
import movieroom from "../assets/movieroom.png";
import homea from "../assets/homea.png";
import toystore from "../assets/toystore.png";
import weatherapp from "../assets/weatherapp.png";
function Projects() {
  return (
    <>
      <Badge
        text={
          <>
            <Svg
              path={
                "M178-98q-53.82 0-90.91-37.09Q50-172.18 50-226v-391q0-53.83 37.09-90.91Q124.18-745 178-745h116v-72.21q0-53.92 37.11-90.85Q368.23-945 422.09-945h116.17q53.87 0 90.8 37.09Q666-870.83 666-817v72h116q53.83 0 90.91 37.09Q910-670.83 910-617v391q0 53.82-37.09 90.91Q835.83-98 782-98H178Zm244-647h116v-72H422v72Z"
              }
            />{" "}
            Some Projects
          </>
        }
      />
      <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-5 py-10">
        <ProjectBox
          link={"https://moldndie.com/"}
          project_name={"MoldNDie"}
          description={
            "The Mold & Die website offers a specialized platform for managing and accessing mold, die, supplier resources, and industry-related components."
          }
          image={moldndie}
          tools={[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind Css",
            "React.JS",
            "laravel",
            "MySQL",
          ]}
        />
        <ProjectBox
          link={"https://medeg-eg.com/"}
          project_name={"MedEG"}
          description={
            "The MedEG is my graduation project and it's a React-based application designed to streamline medical data management, appointments, and healthcare services."
          }
          image={medeg}
          tools={[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind Css",
            "React.JS",
            "laravel",
            "MySQL",
          ]}
        />
        <ProjectBox
          link={"https://movie-room-two.vercel.app/"}
          project_name={"MovieRoom"}
          description={
            "Movie Room is a web app for exploring movies, featuring details, reviews, and recommendations for film enthusiasts."
          }
          image={movieroom}
          tools={["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS"]}
        />
        <ProjectBox
          link={"https://shady110.github.io/Weather-App/"}
          project_name={"Weather App"}
          description={
            "Weather App is a web application providing real-time weather updates, forecasts, and conditions for any location globally."
          }
          image={weatherapp}
          tools={["HTML", "CSS", "JavaScript", "Bootstrap", "React.JS"]}
        />
        <ProjectBox
          link={"https://shady110.github.io/HOMEA/home.html"}
          project_name={"HOMEA"}
          description={
            "HOMEA is a web platform for showcasing and managing home furniture, offering a modern and user-friendly interface."
          }
          image={homea}
          tools={["HTML", "CSS", "JavaScript"]}
        />
        <ProjectBox
          link={"https://shady110.github.io/Toy-Store/toystore.html"}
          project_name={"Toy Store"}
          description={
            "Toy Store is an e-commerce platform landing page designed for browsing, and purchasing toys with a seamless user experience."
          }
          image={toystore}
          tools={["HTML", "CSS"]}
        />
      </div>
    </>
  );
}

export default Projects;
