import React from 'react'
import Square from './square'
import { ItemTypes } from './constants'
import { useDrop } from 'react-dnd'
import { moveCard } from './observe'
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
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                border: isOver ? "1px dashed blue" : ""
            }}
        >
            <Square >{children}</Square>

        </div>
    )
}

export default BoardSquare