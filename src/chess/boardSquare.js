import React from 'react'
import Square from './square'
import { canMoveKnight, moveKnight } from './observe'
import { ItemTypes } from './constants'
import { useDrop } from 'react-dnd'

function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>


            {isOver && !canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'red',
                }}
            />}
            {!isOver && canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'yellow',
                }}
            />}
            {isOver && canDrop && <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'green',
                }}
            />}

        </div>
    )
}

export default BoardSquare