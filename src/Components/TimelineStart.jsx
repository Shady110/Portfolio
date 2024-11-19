function TimelineStart({ Time_Interval , job , company , description }) {
  return (
    <>
      <li>
        <div className="timeline-start text-sm uppercase">{Time_Interval}</div>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end timeline-box max-w-xs text-center shadow-lg rounded-xl">
          <h2 className="font-black text-accent">{job}</h2>
          <h5 className="font-bold">{company}</h5>
          <p className="font-light text-sm">{description}</p>
        </div>
        <hr />
      </li>
    </>
  );
}

export default TimelineStart;