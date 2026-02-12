import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome" >
                HOME
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshows" >
                SHOWS
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies" >
                MOVIES
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixsports" >
                SPORTS
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixnews" >
                NEWS
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixcategory" >
                CATEGORY
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/employee" >
                EMPLOYEE
              </Link>
              </li>
              {/* <li class="nav-item active">
              <Link class="nav-link" to="/employeelist" >
                EMPLOYEE LIST
              </Link>
              </li> */}
              {/* <li class="nav-item active">
              <Link class="nav-link" to="/subemployee" >
                SUB EMPLOYEE LIST
              </Link> */}
              {/* </li> */}
             <li class="nav-item active">
              <Link class="nav-link" to="/inputdemo" >
                INPUT DEMO 
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1" >
                FORM Demo1
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2" >
                FORM Demo2
              </Link>
              </li>
              <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3" >
                FORM Demo3
              </Link>
              </li>
            </ul>
            </div>
            </nav>
    </div>
  )
}
