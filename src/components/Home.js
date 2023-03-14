import React from 'react' 
import './Home.css'


const Home = () => {
    const handleTomale = () => {
      window.location.href  = "/male"
    }

    const handleTofemale = () => {
      window.location.href = "/female"
    }
  return (
    <div className='homeContainer'>
        <div className='genderContainer'>
           <h1 style={{color : "white"}}>Whom do you want to talk with</h1> 
           <div className='genderbox'>
              <button onClick={handleTomale} className='male'>
              </button>
              <button onClick={handleTofemale} className='female'>
              </button>
           </div>
        </div>
    </div>
  )
}

export default Home