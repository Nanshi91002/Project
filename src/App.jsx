import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { MapDemo7 } from './components/MapDemo7'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo3 } from './components/MapDemo3'
import ContentComponent from './components/ContentComponent'
import { Task1 } from './components/Task1'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/NetflixHome'
import { Navbar } from './components/Navbar'
import { NetflixMovies } from './components/NetflixMovies'
import { NetflixShows } from './components/NetflixShows'
import { HomeComponent } from './components/HomeComponent'
//import './App.css'



function App() {
  
  return(
    <div>
      <Navbar></Navbar>
    <Routes>
      <Route path='/netflixhome' element={<NetflixHome/>}></Route>
      <Route path='/netflixmovies' element={<NetflixMovies/>}></Route>
      <Route path='/netflixshows' element={<NetflixShows/>}></Route>
      <Route path='/' element={<HomeComponent/>}></Route>
    </Routes>
    
    </div>
  )
  
}
export default App
