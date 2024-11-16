import Stats from "./Stats";
import ScrollableText from "./ScrollableText";
function Bio() {
  return (
    <>
      <div className="flex flex-col items-start gap-5">
        <ScrollableText/>
        <h2 className="lg:text-6xl xs:text-4xl font-semibold">
          Front-end developer creating intuitive interfaces and seamless web
          experiences.
        </h2>
        <p className="font-thin ">
          Experienced in front-end development, mentoring, and crafting
          full-stack solutions. Strong technical expertise paired with effective
          teamwork and teaching skills.
        </p>
        <div className="flex items-center gap-24">
          <Stats
            number={"10+"}
            text={
              <>
                completed
                <br />
                Projects
              </>
            }
          />
          <Stats
            number={"1+"}
            text={
              <>
                Years of
                <br />
                Experience
              </>
            }
          />
        </div>
      </div>
    </>
  );
}

export default Bio;
