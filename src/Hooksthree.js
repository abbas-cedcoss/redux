import React, { useState,useCallback } from 'react'

function Hooksthree() {
    const [name, setName] = useState({ fName: '', lName: '' })
    const handle = useCallback(
        (e) => {
            console.log(e);
            setName({ ...name, fName: e })},
            //console.log(name.fname)},
            [name.fname]);
    return (
        <div>
            <form>
                <input value={name.fName} onChange={(e)=>handle(e.target.value)} />
                <input value={name.lName} onChange={e => {

                    setName({ ...name, lName: e.target.value })
                    console.log(name.lName)
                }} />
            </form>
            F: {name.fName}
            L: {name.lName}
        </div>
    )
}

export default Hooksthree