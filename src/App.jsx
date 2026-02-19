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
import { NetflixSports } from './components/NetflixSports'
import { NetflixNews } from './components/NetflixNews'
import { NetflixCategory } from './components/NetflixCategory'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Employee } from './components/Employee'
import { EmployeeList } from './components/EmployeeList'
import { InputDemo } from './components/Input/InputDemo'
import { FormDemo1 } from './components/Forms/FormDemo1'
import { FormDemo2 } from './components/Forms/FormDemo2'
import { FormDemo3 } from './components/Forms/FormDemo3'
import { FormDemo4 } from './components/Forms/FormDemo4'
import { InputDemo1 } from './components/Input/InputDemo1'
import { Task } from './components/Forms/Task'
import { ApiDemo1 } from './components/api/ApiDemo1'
import { DemoTask1 } from './components/api/DemoTask1'
import { DTask2 } from './components/api/DTask2'
import { SearchOmdb } from './components/api/SearchOmdb'
import MovieList from './components/api/MovieList'
import MovieDetail from './components/api/MovieDetail'
import { ApiDemo2 } from './components/api/ApiDemo2'
import  InputMovieList  from './components/api/InputMovieList'
import InputMovieDetail from './components/api/InputMovieDetail'

//import { SubEmployee } from './components/SubEmployee'
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
      <Route path='/netflixsports' element={<NetflixSports/>}></Route>
      <Route path='/netflixnews' element={<NetflixNews/>}></Route>
      <Route path='/netflixcategory' element={<NetflixCategory/>}></Route>
      <Route path='/*' element={<ErrorNotFound/>}></Route>
      <Route path='/employee' element={<Employee/>}></Route>
      <Route path='/employeelist' element={<EmployeeList/>}></Route>
      {/* <Route path='/subemployee' element={<SubEmployee/>}></Route> */}
      <Route path='/inputdemo' element={<InputDemo/>}></Route>
      <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
      <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
      <Route path='/formdemo3' element={<FormDemo3/>}></Route>
      <Route path='/formdemo4' element={<FormDemo4/>}></Route>
      {/* <Route path='/task1' element={<Task1/>}></Route> */}
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
      <Route path='/demotask1' element={<DemoTask1/>}></Route>
      <Route path='/dtask2' element={<DTask2/>}></Route>
      <Route path='/searchomdb' element={<SearchOmdb/>}></Route>
      <Route path='/movielist' element={<MovieList/>}></Route>
      <Route path='/movie/:id' element={<MovieDetail/>}></Route>
      <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
      <Route path='/inputmovielist' element={<InputMovieList/>}></Route>
      <Route path='/inputmoviedetail' element={<InputMovieDetail/>}></Route>
     
    </Routes>

    
    </div>
  )
  
}
export default App
