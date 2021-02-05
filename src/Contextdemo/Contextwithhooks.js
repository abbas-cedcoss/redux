import React,{useContext} from 'react'
import { userContext } from "./Compa";

function Contextwithhooks() {
    const val = useContext(userContext)
    console.log(val)
    return (
        <div>
            {val}
        </div>
    )
}

export default Contextwithhooks
