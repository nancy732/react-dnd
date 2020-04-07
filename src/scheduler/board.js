import React from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Card from './card'
import BoardSquare from './boardSquare'
import Timing from './timing'
import './board.scss'
import Header from './header'
function renderSquare(i, j, range, position) {
    range = 100 / range
    return (
        <DndProvider backend={Backend}><div key={i} style={{ width: `${range}%`, height: '50px' }}>
            <BoardSquare x={i} y={j} children={position}>
                {renderCard(i, j, range, position)}
            </BoardSquare>
        </div></DndProvider>
    )
}
function renderCard(x, y, range, [cardX, cardY]) {
    range = range / 10
    if (x === cardX && y === cardY) {
        return <Card x={x} y={y} range={range} />
    }
}
export default function Board({ from = 9, to = 18, range = 10, position }) {
    const squares = []
    for (let i = from; i < to; i++) {
        for (let j = 0; j < 60; j++) {

            squares.push(renderSquare(i, j, range, position))
        }
    }


    return (
        <div>
            <div style={{ height: "100px", width: "100%" }}>
                <Header />
            </div>
            <div className="left-board-style">
                <Timing />
            </div>

            <div
                className="right-board-style"
            >
                {squares}
            </div>
        </div>
    )
}