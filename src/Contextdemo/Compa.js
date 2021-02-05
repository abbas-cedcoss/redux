import React from 'react'
import Compb from './Compb'
import Contextwithhooks from './Contextwithhooks'

export const userContext = React.createContext()
function Compa() {
    return (
        <div>
            <userContext.Provider value='Abbas muttaqi'>
                <Contextwithhooks />
            </userContext.Provider>
        </div>
    )
}

export default Compa
/*
 1-
 */