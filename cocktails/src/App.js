import React from 'react'
import {Routes, Route} from "react-router-dom"
import Drink from './pages/Drink'
import HomePage from './pages/HomePage'
import SearchResult from './pages/SearchResult'
import Search from './pages/Search'


function App() {


  
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />}/>
        <Route element ={<Drink />} path ="/drink" />
        <Route element ={<SearchResult />} path ="/result" />
        <Route element ={<Search />} path = "/search" />
      </Routes>
    </div>
  )
}

export default App
