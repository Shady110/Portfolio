function Divider() {
  return (
    <>
      <div className="w-full h-full flex relative">
        <a
          className="btn btn-ghost w-1/2 rounded-none rounded-bl-lg  border-0 absolute bottom-0 left-0"
          href="https://drive.google.com/file/d/1TAwOqUh8aRj01_7DCxCx1gdFZfwjcWek/view"
        >
          <p className="uppercase font-semibold">Download CV</p>
        </a>
        <a
          className="btn btn-ghost w-1/2 rounded-none rounded-br-lg  border-0 absolute bottom-0 right-0"
          href=""
        >
          <p className="uppercase font-semibold">Conact me</p>
        </a>
      </div>
    </>
  );
}

export default Divider;
