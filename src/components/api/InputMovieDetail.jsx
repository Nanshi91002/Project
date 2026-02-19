import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const InputMovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const loadDetail = async () => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=a66924b8&i=${id}`);
    setMovie(res.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>INPUT MOVIE DETAILS</h1>

      <button onClick={loadDetail}>Load Detail</button>

      {movie && (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><b>Year:</b> {movie.Year}</p>
          <p><b>Genre:</b> {movie.Genre}</p>
          <p><b>Director:</b> {movie.Director}</p>
          <p><b>Plot:</b> {movie.Plot}</p>
          <p><b>Language:</b>{movie.Language}</p>
        </div>
      )}
    </div>
  );
};

export default InputMovieDetail;
