import Background from "../assets/Background.jpg";
function WebpageTemplate() {
  return (
    <>
      <div className="mockup-window bg-base-300 border-accent ">

        <div className="bg-base-200 flex justify-center ">
          <img src={Background} alt="" />
        </div>
      </div>
    </>
  );
}

export default WebpageTemplate;
