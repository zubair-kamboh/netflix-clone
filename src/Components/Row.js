import React, { useEffect, useState } from "react";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    // It will run once the component is loaded
    let fetchMovies = async () => {
      let response = await axios.get(fetchUrl);

      setMovies(response.data.results);
    };

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 className="netflix-series-title">{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${imgBaseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
