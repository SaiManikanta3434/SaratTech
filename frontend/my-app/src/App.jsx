import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App
