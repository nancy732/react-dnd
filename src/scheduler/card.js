import React from 'react'
import { ItemTypes } from './constants'
import { useDrag } from 'react-dnd'
import './card.scss'
export default function Card({ x, y, range }) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    })

    return (
        <div
            ref={drag}
            className="cardStyle"
            style={{
                opacity: isDragging ? 0 : 1,
                borderWidth: isDragging ? 0 : 0.5,
                cursor: 'move',
            }}
        >
            🐬 {x}:{y <= 9 ? `0${y}` : y} - {x}:{y < 9 ? `0${y + 1}` : y + 1}
        </div>
    )
}
