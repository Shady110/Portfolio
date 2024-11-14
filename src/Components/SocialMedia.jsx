function SocialMedia({ icon, link }) {
  return (
    <>
      <a href={link} className="">
        <button className=" btn btn-outline rounded-xl  w-full h-full">
          <i class={icon}></i>
        </button>
      </a>
    </>
  );
}

export default SocialMedia;
