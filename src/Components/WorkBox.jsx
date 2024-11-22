function WorkBox({job,comapny,start_date,end_date}) {
    return ( 
    <>
    <li className="flex items-center justify-between">
        <h2 className="font-bold text-md uppercase">{job}<br /><span className="font-medium text-accent">( {comapny} )</span></h2>
        <hr className="w-1/5 border-accent"/>
        <h2 className="text-center text-sm uppercase">{start_date}<br />-<br />{end_date}</h2>
    </li>
    </>
     );
}

export default WorkBox;