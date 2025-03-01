function WorkBox({job,comapny,start_date,end_date}) {
    return ( 
    <>
    <li className="flex items-center justify-between gap-3">
        <h2 className="font-bold text-md uppercase text-nowrap">{job}<br /><span className="font-medium text-accent">( {comapny} )</span></h2>
        <hr className="w-full border-accent"/>
        <h2 className="text-center text-sm uppercase text-nowrap">{start_date} - {end_date}</h2>
    </li>
    </>
     );
}

export default WorkBox;