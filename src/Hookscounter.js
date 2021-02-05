import React, { useState } from 'react';

export default function Hookscounter() {
    console.log('Abbas')

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((e) => { console.log(e); })
    return (
        <>
            <h1>Abbas</h1>
        </>
    )
}