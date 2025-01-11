import {skill,empName} from './CreateContextAPI';

import {useContext} from 'react'

const ReceivingContext=()=>{
    const empSkills=useContext(skill);
    const empNames=useContext(empName);
    return(
        <>
        
            <h1 className="text-center text-dark my-3">
                Employee Name is <mark>{empNames}</mark>
            </h1>
            <h1 className="text-center text-dark my-3">
                Skills of Employee <mark>{empSkills}</mark>
            </h1>

        
        </>
    )
}
export default ReceivingContext;