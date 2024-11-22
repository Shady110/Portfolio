function CourseBox({course , company , date}) {
  return (
    <>
      <li className="flex flex-col items-start ">
        <h2 className="font-bold text-md uppercase">
            {course}
        </h2>
        <p className="text-accent">{company} <br /> ( {date} )</p>
      </li>
    </>
  );
}

export default CourseBox;
