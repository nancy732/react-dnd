import React from 'react'
import Square from './square'
import { ItemTypes } from './constants'
import { useDrop } from 'react-dnd'
import { moveCard } from './observe'
import './boardSquare.scss'
function BoardSquare({ x, y, children }) {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: () => moveCard(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    })

    return (

        <div
            ref={drop}
            className="board-square"
        >
            <Square className={isOver ? "border-square" : ""} >{children}</Square>

        </div>
    )
}

export default BoardSquare