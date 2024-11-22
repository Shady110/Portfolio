function SocialMedia({ icon, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className=" btn btn-outline rounded-xl  w-full h-full">
          {icon}
        </button>
      </a>
    </>
  );
}

export default SocialMedia;
