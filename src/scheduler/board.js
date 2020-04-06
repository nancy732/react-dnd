import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Card from './card'
import BoardSquare from './boardSquare'
import Timing from './timing'
import '../App.css'
function renderSquare(i, j, position) {
    return (
        <DndProvider backend={Backend}><div key={i} style={{ width: '10%', height: '50px' }}>
            <BoardSquare x={i} y={j} children={position}>
                {renderCard(i, j, position)}
            </BoardSquare>
        </div></DndProvider>
    )
}
function renderCard(x, y, [cardX, cardY]) {
    if (x === cardX && y === cardY) {
        return <Card x={x} y={y} />
    }
}
export default function Board({ position }) {
    const squares = []
    for (let i = 9; i < 19; i++) {
        for (let j = 0; j < 60; j++) {
            squares.push(renderSquare(i, j, position))
        }
    }


    return (
        <div>
            <div className="left">
                <Timing />
            </div>

            <div
                style={{
                    width: '90%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        </div>
    )
}