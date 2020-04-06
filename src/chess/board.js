import React from 'react'
import Knight from './knight'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import BoardSquare from './boardSquare'
function renderSquare(i, knightPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)

    return (
        <DndProvider backend={Backend}><div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div></DndProvider>

    )
}
function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
}
export default function Board({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {squares}
        </div>
    )
}