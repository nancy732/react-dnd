import React from 'react'
export default function Square({ children }) {

    return (
        <div style={{
            height: '50px',
            borderTop: "1px dashed blue",
            borderBottom: "1px dashed blue",
        }} >{children}</div>
    )
}

