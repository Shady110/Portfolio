function Stats({number,text}) {
  return (
    <>
      <h2 className="stats rounded-xl shadow p-3 lg:text-6xl xs:text-xl font-semibold flex items-center gap-3 text-accent w-full">
        {number}{" "}
        <span className="font-thin text-sm">
          {text}
        </span>
      </h2>
    </>
  );
}

export default Stats;
