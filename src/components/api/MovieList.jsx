import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovies = async () => {
    const res = await axios.get(
      "https://www.omdbapi.com/?apikey=a66924b8&s=iron");
    setMovies(res.data.Search);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movie List</h1>
      <button onClick={getMovies}>Get Movies</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        {movies?.map((movie) => (
          <div key={movie.imdbID} style={{ border: "1px solid gray", padding: "10px" }}>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <h3>{movie.Title}</h3>

          
            <button onClick={() => navigate(`/movie/${movie.imdbID}`)}>
              View Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
