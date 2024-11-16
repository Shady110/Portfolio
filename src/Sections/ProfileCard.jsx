import Profile from "../assets/Profile.jpg";
import Divider from "../Components/Divider";
import SocialMedia from "../Components/SocialMedia";
function ProfileCard() {
  return (
    <>
      <div className="w-full h-full flex  flex-col justify-center items-center">
        <div className="rounded-b-lg h-5/6 w-full flex justify-center items-center lg:flex-col xs:flex-row xs:p-5  gap-9">
          <div className="avatar  lg:max-w-56 xs:max-w-44    ">
            <div className="w-full mx-auto rounded-3xl">
              <img src={Profile} />
            </div>
          </div>
          <div className=" flex flex-col justify-center itmes center xs:text-start lg:text-center ">
            <h2 className="xs:text-xl md:text-3xl uppercase font-semibold">
              Shady Gamal
            </h2>
            <h5 className="text-md text-accent uppercase font-semibold border-transparent">
              Front End Web Developer
            </h5>
            <div className="w-3/4 mx-auto flex justify-center items-center gap-3 pt-5">
              <SocialMedia icon={"fa-brands fa-linkedin-in"} link={""} />
              <SocialMedia icon={"fa-brands fa-instagram"} link={""} />
              <SocialMedia icon={"fa-brands fa-github"} link={""} />
              <SocialMedia icon={"fa-solid fa-phone"} link={""} />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className=" w-full rounded-b-lg h-1/6">
          <Divider />
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
