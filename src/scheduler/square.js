import React from 'react'
import './square.scss'
export default function Square({ className, children }) {

    return (
        <div className={`squareStyle ${className}`}>{children}</div>
    )
}

