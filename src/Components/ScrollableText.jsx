function ScrollableText() {
  return (
    <>
      <h1 className="flex items-center text-2xl font-normal  dark:fill-neutral-content">
        Hello , I'm
        <span className="relative ml-3 h-7 w-60  overflow-hidden">
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent">
            Shady Gamal
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent [animation-delay:0.83s]">
            Front End Developer
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-accent [animation-delay:1.83s]">
            Full-Stack Mentor
          </span>
        </span>
      </h1>
    </>
  );
}

export default ScrollableText;
