import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import ChartsMap from './pages/ChartsMap'
import CreateContact from './components/CreateContact'
import EditUser from './components/EditUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Contact />} />
        <Route path='/createContact' element={<CreateContact  />} />
        <Route path='/editContact/:id' element={<EditUser />} />
        <Route path='/chart' element={<ChartsMap />} />
      </Routes>
    </div>
  )
}

export default App