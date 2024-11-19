function ProgressBar({title,value}) {
  return (
    <>
      <div className="flex items-center gap-5 w-full">
        <h2 className="text-lg font-semibold">{title}</h2>
        <progress
          className="progress progress-accent w-full"
          value={value}
          max="100"
        ></progress>
      </div>
    </>
  );
}

export default ProgressBar;
