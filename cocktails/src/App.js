import {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import SearchResult from './pages/SearchResult'
import Drink from './pages/Drink'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function App() {
  //sets the drinkID
  const [drink, setDrink] = useState(0)
  //sets the search bar query
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
        <div id="search-bar">
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
        </div> 
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
