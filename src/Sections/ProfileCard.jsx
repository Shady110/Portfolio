import Profile from "../assets/Profile.jpg";
import Fiverr from "../assets/fiverr-2.svg";

import Divider from "../Components/Divider";
import SocialMedia from "../Components/SocialMedia";
import Svg from "../Components/Svg";
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
                link={""}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-brands fa-instagram"></i>
                  </>
                }
                link={""}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-brands fa-github"></i>
                  </>
                }
                link={""}
              />
              <SocialMedia
                icon={
                  <>
                    <i className="fa-solid fa-phone"></i>
                  </>
                }
                link={""}
              />
              <SocialMedia
                icon={
                  <svg
                    viewBox="0 0 97 29.26368627101511"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    
                  >
                    <path
                      d="M88.949 14.027h-3.433c-2.21 0-3.394 1.655-3.394 4.413v9.97h-6.511V14.026h-2.763c-2.21 0-3.393 1.655-3.393 4.413v9.97h-6.512V8.707h6.512v2.995c1.066-2.325 2.526-2.995 4.697-2.995h7.971v2.995c1.066-2.325 2.526-2.995 4.697-2.995h2.13v5.32zm-27.427 6.068H47.947c.355 2.207 1.736 3.468 4.064 3.468 1.736 0 2.96-.71 3.355-1.97l5.761 1.615c-1.42 3.428-4.933 5.517-9.116 5.517-7.064 0-10.3-5.478-10.3-10.166 0-4.61 2.841-10.127 9.905-10.127 7.498 0 9.984 5.595 9.984 9.733a20.11 20.11 0 0 1-.078 1.93zm-6.314-3.822c-.158-1.695-1.382-3.27-3.591-3.27-2.053 0-3.275.905-3.67 3.27zM30.347 28.409h5.721l7.143-19.7h-6.55l-3.473 11.465-3.552-11.466h-6.512zm-26.677 0h6.472V14.027H16.3V28.41h6.432V8.708H10.142V7.487c0-1.34.947-2.167 2.447-2.167h3.71V0h-4.775C6.827 0 3.67 2.877 3.67 7.092v1.616H0v5.32h3.67z"
                      fill="#003912"
                    />
                    <path
                      d="M92.975 29C95.198 29 97 27.2 97 24.98c0-2.22-1.802-4.019-4.025-4.019s-4.026 1.8-4.026 4.02c0 2.22 1.803 4.019 4.026 4.019z"
                      fill="#1dbf73"
                    />
                  </svg>
                }
                link={""}
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
