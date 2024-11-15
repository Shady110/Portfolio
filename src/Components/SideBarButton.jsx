function SideBarButton({ path ,help }) {
  return (
    <button className="hover:bg-neutral  hover:text-white bg-base-100 transition-colors  rounded-full p-4 hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip={help}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        width="40px"
        className="w-6 mx-auto  fill-current" // DaisyUI class to adapt to the theme
      >
        <path d={path} />
      </svg>
    </button>
  );
}

export default SideBarButton;
