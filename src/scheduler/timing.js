import React from 'react'

function renderSquare(j, i) {

    return (
        <div style={{ height: '50px', width: "100%", textAlign: "center", borderRight: "1px solid red" }}>
            {j} : {i === 0 ? '00' : i}
        </div>
    )
}
export default function Timing({ from = 9, to = 18, range = 10 }) {
    let i, j

    const timings = []
    for (j = from; j < to; j++) {

        for (i = 0; i < 60; i += range) {
            timings.push(renderSquare(j, i))
        }
    }


    return (
        <div >{timings}</div>
    )
}