import resume from "../assets/Shady Gamal Amin Resume.pdf"
function Divider() {
  const onButtonClick = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Shady Gamal Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="w-full h-full flex relative">
        <a
          className="btn btn-ghost w-1/2 rounded-none rounded-bl-lg  border-0 absolute bottom-0 left-0"

          onClick={()=>{onButtonClick()}}
        >
          <p className="uppercase font-semibold">Download CV</p>
        </a>
        <a
          className="btn btn-ghost w-1/2 rounded-none rounded-br-lg  border-0 absolute bottom-0 right-0"
          href="#contacts"
        >
          <p className="uppercase font-semibold">Conact me</p>
        </a>
      </div>
    </>
  );
}

export default Divider;
