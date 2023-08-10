import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import CatalogueScreen from './screens/CatalogueScreen'
import BasketScreen from './screens/BasketScreen'
import UserScreen from './screens/UserScreen'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/catalogue' element={<CatalogueScreen/>}/>
        <Route path='/panier' element={<BasketScreen/>}/>
        <Route path='/user' element={<UserScreen/>}/>



      </Routes>
    </Router>
      
    
  )
}

export default App
