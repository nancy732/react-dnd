import React from 'react'
import { ItemTypes } from './constants'
import { useDrag } from 'react-dnd'
export default function Card({ x, y }) {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    })

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                borderWidth: isDragging ? 0 : 0.5,
                cursor: 'move',
                background: "antiquewhite", height: '40px', width: '304%',
                textAlign: "center",
                paddingTop: "10px",
                borderLeft: "1px solid red",
                borderRight: "1px solid red"

            }}
        >
            🐬 {x}:{y <= 9 ? `0${y}` : y} - {x}:{y < 9 ? `0${y + 3}` : y + 3}
        </div>
    )
}
