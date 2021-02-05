import React, { useEffect, useState } from 'react'

function Hooksuseeffect() {
    const [count, setcount] = useState(0)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((e) => { console.log(e); })
    }, [])

    return (
        <div>
            {count}
            <button onClick={() => { setcount(count + 1) }} >Click</button>
        </div>
    )
}

export default Hooksuseeffect
