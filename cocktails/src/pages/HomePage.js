import React from 'react'
import CocktailCarousel from '../components/CocktailCarousel'
import './Homepage.css'
import bar from '../img/bar.jpg'

function HomePage() {
  
  return (
    <div>
      <img className='homepage-banner' src={bar} alt="bartender" />
      {<CocktailCarousel />}
    </div>
  )
}

export default HomePage