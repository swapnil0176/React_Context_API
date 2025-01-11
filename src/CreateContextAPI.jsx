import {createContext} from 'react'
import ReceivingContext from './ReceivingContext';
const skill=createContext();
const empName=createContext();
export default function CreateContextAPI(){
    return(
        <>
            <h1 className="text-center text-warning">I am Creating Context API</h1>
            <skill.Provider value="Java Developer">
                <empName.Provider value="Swapnil">
                    <ReceivingContext/>
                </empName.Provider>
            </skill.Provider>
        </>
    )
}
export {skill,empName}