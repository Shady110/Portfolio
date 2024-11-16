function Svg({ path }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="40px"
        className="w-6 mx-auto  fill-accent" // DaisyUI class to adapt to the theme
      >
        <path d={path} />
      </svg>
    </>
  );
}

export default Svg;
