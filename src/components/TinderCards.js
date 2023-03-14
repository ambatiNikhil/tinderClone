import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import db from '../firebase'

const TinderCards = () => {
    const [mens , setMens] = useState([])

    useEffect(() => {
        db.collection('men').onSnapshot(snapshot => {
            setMens(snapshot.docs.map(doc => doc.data()))
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
              {mens.map(men => (
                  <TinderCard onSwipe={onSwipe} 
                      className='swipe'
                      key={men.name}
                      onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                      preventSwipe={['up', 'down']}>
                      <div style={{ backgroundImage: `url(${men.url})` }} className='card'>
                          <h3>{men.name}</h3>
                      </div>
                  </TinderCard>
              ))}
          </div>
      </div>
  )
}


        // {name : "Raj" , url : "https://randomuser.me/api/portraits/men/14.jpg"} ,
        // {name : "Robert" , url : "https://randomuser.me/api/portraits/men/73.jpg"},
        // {name : "Rahim" , url : "https://randomuser.me/api/portraits/men/39.jpg"},
        // {name : "Renny" , url : "https://randomuser.me/api/portraits/men/51.jpg"}
export default TinderCards