import React from 'react'

function renderSquare(j, i) {

    return (
        <div style={{ height: '50px', width: "100%", textAlign: "center", borderRight: "1px solid red" }}>
            {j} : {i === 0 ? '00' : i}
        </div>
    )
}
export default function Timing() {

    let i, j
    const timings = []
    for (j = 9; j < 19; j++) {

        for (i = 0; i < 60; i += 10) {
            timings.push(renderSquare(j, i))
        }
    }


    return (
        <div >{timings}</div>
    )
}