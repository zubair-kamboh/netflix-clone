// rfce
import React, { useState, useEffect } from "react";
import axios from "../axios";
import request from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const banner = async () => {
      const response = await axios.get(request.fetchNetflixOriginals);
      const movieArray = response.data.results;

      const randomMovie =
        movieArray[Math.floor(Math.random() * movieArray.length - 1)];
      setMovie(randomMovie);
      console.log(randomMovie);
    };
    banner();
  }, []);

  // Header Image Styling
  const headerStyling = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    minHeight: "80vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center center",
    color: "white",
  };

  return (
    <header className="header" style={headerStyling}>
      <div className="header-content">
        <h2 className="title">{movie?.name || movie?.originals_name}</h2>
        <div className="buttons">
          <button className="play-btn">Play</button>
          <button className="mylist-btn">MyList</button>
        </div>
        <p className="description">{movie?.overview}</p>
      </div>

      <div className="fadeGradient"></div>
    </header>
  );
}

export default Banner;
