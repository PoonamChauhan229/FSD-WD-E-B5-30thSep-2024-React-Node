import './App.css'
import About from './Components/About';
import Home from './Components/Home';
import { MovieDisplay } from './Components/MovieDisplay'
import {useEffect, useState} from 'react'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Page404 from './Components/Page404';

import { AddMovie } from './Components/AddMovie';
import { CartContext } from './utils/cartContext';
import { EditMovie } from './Components/EditMovie';
import { CartPage } from './Components/CartPage';

function App() { 
 
  const [cartUctxt,setCartUctxt]=useState(0)
  // using fetch
  // const getMovie=async()=>{
  //   let res=await fetch("https://670760d2a0e04071d22a0624.mockapi.io/movie/movie")
  //   let data=await res.json()
  //   console.log(data)
  //   setAllmovies(data)
  // }

  
 
  return (
    <>
    <CartContext.Provider value={[cartUctxt,setCartUctxt]}>
    <Navbar/>    
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path='/about' element={<About/>}/>   
      <Route path='/allmovies' element={<MovieDisplay/>}/>
      <Route path='/addmovie' element={<AddMovie/>}/>
      <Route path='/edit/:id' element={<EditMovie/>}/>
      <Route path='/cartpage' element={<CartPage/>}/>
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </CartContext.Provider>
    </>
  )
}

export default App

// <BrowserRouter><Routes><Route path="" element={<Component/>}/></Routes></BrowserRouter>
