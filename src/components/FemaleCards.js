import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import db from '../firebase'

const FemaleCards = () => {
    const [womens, setWomen] = useState([])
    useEffect(() => {
        db.collection('womens').onSnapshot(snapshot => {
            setWomen(snapshot.docs.map(doc => doc.data()))
        })
    })

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__container'>
                {womens.map(women => (
                    <TinderCard onSwipe={onSwipe}
                        className='swipe'
                        key={women.name}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}>
                        <div style={{ backgroundImage: `url(${women.url})` }} className='card'>
                            <h3>{women.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default FemaleCards