import React, { useState, useEffect } from 'react'

function Datafetch() {
    const [posts, setposts] = useState([])
    const [inp, setinp] = useState('')
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => res.json())
    //         .then((e) => {
    //             console.log(e)
    //             setposts(e)
    //         })
    // }, [])
    const Abbas = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
                .then((res) => res.json())
                .then((e) => {
                    console.log(e[inp])
                    setposts(e[inp])
                })
    }
    return (
        <div>
            <ul>
                <input type='text' onChange={e => {
                    setinp(e.target.value)
                }} />
                <button onClick={e => {
                    Abbas()
                }}>Click</button>
                { 
                    // posts.map(post => (
                    //     <li key={post.id} >{post.title}</li>
                    // ))
                    <h1>{posts.title}</h1>
                }
            </ul>
        </div>
    )
}

export default Datafetch