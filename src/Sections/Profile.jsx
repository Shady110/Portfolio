import Bio from "../Components/Bio";
import Contacts from "../Components/Contacts";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";

function Profile() {
  return (
    <>
      <section
        className="md:px-10 xs:px-5 py-16 flex flex-col  items-start gap-7 "
        id="profile"
      >
        <Bio />
      </section>
      
      <section className="md:px-10 xs:px-5 py-16" id="skills">
        {" "}
        <Skills />
      </section>
      
      <section className="md:px-10 xs:px-5 py-16" id="Resume">
        {" "}
        <Resume />
      </section>

      <section className="md:px-10 xs:px-5 py-16" id="projects">
        {" "}
        <Projects/>
      </section>

      <section className="md:px-10 xs:px-5 py-16" id="contacts">
        {" "}
        <Contacts/>
      </section>
    </>
  );
}

export default Profile;
