import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SearchResult from './pages/SearchResult'
import Drink from './pages/Drink'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap'

import './pages/Homepage.css'
import FeelinLucky from './pages/FeelinLucky'
import IngredientList from './pages/IngredientList'
import Ingredients from './pages/Ingredients'
import IngredientSearchResult from './pages/IngredientSearchResult'



function App() {
  //sets the drinkID
  const [drink, setDrink] = useState(0)
  //sets the search bar 
  const [search, setSearch] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [ingSearch, setIngSearch] = useState("")

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/result')
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleNavIng = (e) => {
    e.preventDefault()
    navigate('/ingredients')
  }

  const handleNavRando = (e) => {
    e.preventDefault()
    navigate('/random')
  }

  const handleNavHome = (e) => {
    e.preventDefault()
    navigate('/')
  }

  
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand onClick={handleNavHome} className="navbar-brand">Drink Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='ml-auto'>
              <Nav.Link onClick={handleNavIng}>Ingredients</Nav.Link>
              <Nav.Link onClick={handleNavRando}>I'm Feeling Lucky</Nav.Link>
              </Nav>
                <Nav className='ms-auto'>
                  <Form 
                    id='search-bar'
                    className="d-flex" 
                    onSubmit={handleSubmit}
                    onChange={handleSearch}
                    >
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="btn btn-dark" onClick={handleSubmit}>Search</Button>
                  </Form>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route element ={<SearchResult query={search} setDrink={(e) => setDrink(e)}/>} path ="/result" />
        <Route element ={<Drink drink={drink}/>} path = "/drink" />
        <Route element={<IngredientList setIngredient={(e) => setIngredient(e)}/>} path="/ingredients" />
        <Route element={<Ingredients ingredient={ingredient} setIngSearch={setIngSearch}/>} path="ing" />
        <Route element={<IngredientSearchResult ingSearch={ingSearch} setDrink={(e) => setDrink(e)} />} path='/ingsearch' />
        <Route element={<FeelinLucky />} path="/random" />
      </Routes>
    </div>
  )
}

export default App
