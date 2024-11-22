function TextBox({concept}) {
  return (
    <>
      <div className="flex justify-center items-center py-3 xs:px-3 md:px-7 stats shadow rounded-xl">
        <h2 className="text-xs font-semibold">{concept}</h2>
      </div>
    </>
  );
}

export default TextBox;
