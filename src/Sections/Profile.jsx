import Bio from "../Components/Bio";
import Skills from "../Components/Skills";

function Profile() {
  return (
    <>
      <section
        className="px-10 py-16 flex flex-col  items-start gap-7 h-full"
        id="profile"
      >
        
          <Bio />
        
      </section>
      <section
        className="px-10 py-16"
        id="skills"
      >
          {" "}
          <Skills />
       
      </section>
    </>
  );
}

export default Profile;
