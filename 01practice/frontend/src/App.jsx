import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import Add from './pages/Add'
import NotFound from './pages/NotFound'
import Details from './pages/Details'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/products' element = {<Products/>}/>
          <Route path='/details/:id' element = {<Details/>}/>
          <Route path='/favorites' element = {<Favorites/>}/>
          <Route path='/add' element = {<Add/>}/>

        </Route>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
