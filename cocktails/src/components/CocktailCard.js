import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function CocktailCard({idDrink, strDrink, strDrinkThumb, setDrink, strCategory, strAlcoholic}) {

  const navigate = useNavigate()

  const navToDrink = (e) => {
    e.preventDefault()
    setDrink(e.target.parentNode.parentNode.id)
    navigate('/drink')
  }
  
  return (
    <Card style={{ width: '18rem' }} id={idDrink}>
      <Card.Img variant="top" src={strDrinkThumb} />
      <Card.Body>
        <Card.Title>{strDrink}</Card.Title>
        <Card.Text>
          {strCategory}<br></br>{strAlcoholic}
        </Card.Text>
        <Button variant="primary" onClick={(e) => navToDrink(e)}>Recipe</Button>
      </Card.Body>
    </Card>
  )
}

export default CocktailCard