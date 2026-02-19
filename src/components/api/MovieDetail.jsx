import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MovieDetail() {
  const { id } = useParams();   
  const [movie, setMovie] = useState(null);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=a66924b8&i=${id}`
    );
    setMovie(res.data);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Detail</h1>


      <button onClick={getMovieDetail}>Load Movie Detail</button>

      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><b>Year:</b> {movie.Year}</p>
          <p><b>Genre:</b> {movie.Genre}</p>
          <p><b>Director:</b> {movie.Director}</p>
          <p><b>Plot:</b> {movie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
