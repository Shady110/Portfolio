function EducationBox({ education, place, date, grade, details }) {
  return (
    <>
      <li className="flex items-center justify-between">
        <h2 className="font-bold text-md uppercase">
          {education}
          <br />
          <span className="font-medium text-accent">{place}</span>{" "}
          <span className="font-thin text-sm">{date}</span>
          <br />
          <span className="font-medium text-md text-accent">{grade}</span>
          <br />
          <span className="font-medium text-sm text-accent">{details}</span>
        </h2>
      </li>
    </>
  );
}

export default EducationBox;
