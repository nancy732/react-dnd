import React from 'react'

export default function Square({ black, children }) {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: '164px',
                height: '79.6px',
            }}
        >
            {children}
        </div>
    )
}