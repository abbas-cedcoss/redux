import React, { useState, useEffect } from 'react'

function HooksAutoCount() {
    const [count, setcount] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setcount(count + 1)
        }, 1000);
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export default HooksAutoCount
