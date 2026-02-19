import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputMovieList = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const searchMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=a66924b8&s=${movieName}`
    );
    setMovies(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search Movie</h1>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(n) => setMovieName(n.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <button onClick={searchMovie} style={{ marginLeft: "10px" }}>
        Search
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {movies?.map((movie) => (
          <div
            key={movie.imdbID}
            style={{ border: "1px solid gray", padding: "10px" }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />

            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>

            <button onClick={() => navigate(`/movie/${movie.imdbID}`)}>
              View Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InputMovieList;


