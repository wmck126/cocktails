import {useRef, useEffect} from 'react'
import CocktailCarousel from '../components/CocktailCarousel'
import './Homepage.css'
import {gsap} from "gsap"

function HomePage() {
  const headline = useRef()
  const carousel = useRef()


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headline.current, {
        y:-300,
        duration: 1.5,
        ease: 'circ',
        opacity: 0.3,
      })
      gsap.from(carousel.current,{
        y: 300,
        duration: 1.5,
        ease: 'circ',
        opacity: 0.3
      })
      return () => ctx.revert()
    })
  }, [])


  
  
  return (
    <div>
      {/* <img className='homepage-banner' src={bar} alt="bartender" /> */}
      <div id='homepage-title' ref={headline}>
        <h1>Drink Finder</h1>
        <h4>Please enter a drink in the navbar above to search the database</h4>
        <h4>Or browse through our ingredient list to find matching cocktails!</h4>
      </div>
      <div id="carousel" ref={carousel}>
        {<CocktailCarousel />}
      </div>
    </div>
  )
}

export default HomePage