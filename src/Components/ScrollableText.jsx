function ScrollableText() {
  return (
    <>
      <h1 className="flex items-center xs:text-sm md:text-2xl font-normal  dark:fill-neutral-content w-full">
        Hello , I'm
        <span className="relative ml-3 md:h-7 xs:h-4 xs:w-36 md:w-72 overflow-hidden">
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent ">
            Shady Gamal
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent [animation-delay:0.83s] ">
            Front End Developer
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent [animation-delay:1.83s] ">
            Full-Stack Mentor
          </span>
        </span>
      </h1>
    </>
  );
}

export default ScrollableText;
