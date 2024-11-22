function ProjectBox({ image, project_name, description, tools , link }) {
  const mystyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), black), url(${image})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  };

  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card bg-base-100 w-full shadow-xl rounded-2xl hover:scale-105 transition ease-in-out duration-300">
          <figure>
            <img src={image} alt="project image" />
          </figure>
          <div className="card-body p-5">
            <h2 className="card-title text-3xl font-black">{project_name}</h2>
            <p className="font-thin text-sm pb-3">{description}</p>
            <div className="card-actions justify-start">
              {tools.map((tool) => (
                <div className="badge badge-sm  badge-accent badge-outline">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProjectBox;
