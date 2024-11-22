function SideBarButton({ path ,help,section }) {
  return (
    <a href={section}>
    <button className="hover:bg-neutral  hover:text-white bg-base-100 transition-colors  rounded-full xs:p-2 md:p-4 hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip={help}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className="w-full max-w-6 mx-auto  fill-current" // DaisyUI class to adapt to the theme
      >
        <path d={path} />
      </svg>
    </button>
    </a>
  );
}

export default SideBarButton;
