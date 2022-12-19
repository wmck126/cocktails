import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SearchResult from './pages/SearchResult'
import Drink from './pages/Drink'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import './pages/Homepage.css'


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
      <Navbar bg="dark" expand="lg" variant="dark" fixed='top'>
        
          <Navbar.Brand href="/">Drink Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Container className='d-flex justify-content-end'>
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
                  <Button variant="outline-success">Search</Button>
              </Form>
              </Container>
            </Navbar.Collapse>
        
      </Navbar>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route element ={<SearchResult query={search} setDrink={(e) => setDrink(e)}/>} path ="/result" />
        <Route element ={<Drink drink={drink}/>} path = "/drink" />
      </Routes>
    </div>
  )
}

export default App
