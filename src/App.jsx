import { Routes, Route } from 'react-router-dom'
import Login from './Components/Pages/Login'
import Home from './Components/Pages/Home'
import Contacts from './Components/Pages/Contacts'
import Details from './Components/Pages/Details'


function App() {

  return (
    <>
      <div className="pages">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/contacts' element={<Contacts />} />

        </Routes>

      </div >
    </>
  )
}

export default App
