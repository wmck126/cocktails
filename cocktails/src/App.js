import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SearchResult from './pages/SearchResult'
import Drink from './pages/Drink'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Ingredients from './pages/Ingredients'
import { Nav } from 'react-bootstrap'

import './pages/Homepage.css'
import FeelinLucky from './pages/FeelinLucky'



function App() {
  //sets the drinkID
  const [drink, setDrink] = useState(0)
  //sets the search bar 
  const [search, setSearch] = useState("")
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/result')
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/">Drink Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='ml-auto'>
              <Nav.Link href="/ingredients">Ingredients</Nav.Link>
              <Nav.Link href="/random">I'm Feeling Lucky</Nav.Link>
              </Nav>
                <Nav className='ms-auto'>
                  <Form 
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
                      <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
                  </Form>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route element ={<SearchResult query={search} setDrink={(e) => setDrink(e)}/>} path ="/result" />
        <Route element ={<Drink drink={drink}/>} path = "/drink" />
        <Route element={<Ingredients />} path="/ingredients" />
        <Route element={<FeelinLucky />} path="/random" />
      </Routes>
    </div>
  )
}

export default App
