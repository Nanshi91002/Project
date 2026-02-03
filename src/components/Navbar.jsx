import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>


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
            
            
            



          </ul>

        </div>
      </nav>
    </div>
  )
}
