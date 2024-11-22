import Profile from "../assets/Profile.jpg";
import Fiverr from "../assets/fiverr-2.svg";

import Divider from "../Components/Divider";
import SocialMedia from "../Components/SocialMedia";
import Svg from "../Components/Svg";
function ProfileCard() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="rounded-b-lg h-5/6 w-full flex justify-center items-center flex-col  gap-3  ">
          <div className="avatar  lg:max-w-56 md:max-w-36 xs:max-w-32   min-w-30 ">
            <div className="w-full mx-auto rounded-3xl">
              <img src={Profile} />
            </div>
          </div>
          <div className=" flex flex-col justify-center itmes center text-center ">
            <h2 className="text-3xl uppercase font-semibold">
              Shady Gamal
            </h2>
            <h5 className="text-md text-accent uppercase font-semibold border-transparent ">
              Front End Web Developer
            </h5>
            <div className="w-3/4 mx-auto flex justify-center items-center gap-3 pt-5">
              <SocialMedia
                icon={
                  <>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </>
                }
                link={"http://www.linkedin.com/in/shady--gamal"}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-brands fa-instagram"></i>
                  </>
                }
                link={"https://www.instagram.com/shadygamal_11/"}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-brands fa-github"></i>
                  </>
                }
                link={"https://github.com/shady110"}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-solid fa-phone"></i>
                  </>
                }
                link={"tel:+201008951156"}
              />
             
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
