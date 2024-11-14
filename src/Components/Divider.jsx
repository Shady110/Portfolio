function Divider() {
  return (
    <>
      <div className="w-full h-full grid grid-cols-2">
        <a
          className="btn rounded-none rounded-bl-lg btn-neutral h-full border-0 border-r-2 border-white"
          href=""
        >
          <p className="text-white uppercase font-light">Downlaod CV</p>
        </a>
        <a
          className="btn rounded-none rounded-br-lg btn-neutral h-full border-0 border-l-2 border-white"
          href=""
        >
          <p className="text-white uppercase font-light">Conact me</p>
        </a>
      </div>
    </>
  );
}

export default Divider;
