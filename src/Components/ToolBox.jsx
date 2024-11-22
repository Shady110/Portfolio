function ToolBox({ title, image }) {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center p-3 stats stats-vertical lg:stats-horizontal shadow w-full h-full  rounded-xl ">
        <div className="ring-accent  w-24 rounded-full ring flex justify-center items-center  aspect-square">
          <img src={image} alt="" loading="lazy" className="w-12" />
        </div>
        <h2 className="font-semibold text-lg border-transparent">{title}</h2>
      </div>
    </>
  );
}

export default ToolBox;
