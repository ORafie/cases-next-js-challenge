import React from 'react'
import {ICard} from '../models'

interface CardProps {
    card: ICard
}

export function Card({ card }: CardProps) {
   
    return (
        <div 
            className="border py-2 px=4 rounded flex flex-col items-center mb-2"
            >
            <p>{card.category}</p>
            <p>{card.title}</p>
            <img src={card.image} className="w-1/6" alt={card.title} />
            <p>{card.author}</p>
            <p>{card.company}</p>
        </div>
    )
}
