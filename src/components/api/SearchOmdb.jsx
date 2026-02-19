import axios from 'axios'
import React, { useState } from 'react'

export const SearchOmdb = () => {

  const [movies, setmovies] = useState([])
  const [searchParam, setsearchParams] = useState("Iron Man")

  const search = async () => {
    const respond = await axios.get(
      `https://www.omdbapi.com/?apikey=a66924b8&s=${searchParam}`
    )
    setmovies(respond.data.Search)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>SEARCH OMDB</h1>

      <button onClick={search}>GET</button>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{
                border: "1px solid gray",
                padding: "10px",
                textAlign: "center"
              }}
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover"
                }}
              />

              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <p>{movie.imdbID}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
