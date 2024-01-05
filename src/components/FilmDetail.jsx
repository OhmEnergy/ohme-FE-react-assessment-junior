import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../utils";

/**
 * 1. Fetch the selected film from the API
 * 2. Display the title, vote average, and release date for each film
 * 3. Implement a loading state and error/no films state
 * 4. Format the date into this format: "Jan 9th, 2024"
 *
 * MovieDB URL:
 * `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
 */

function FilmDetail() {
  const { id } = useParams();
  const [selectedFilm, setSelectedFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    setSelectedFilm(data);
    setIsLoading(false);
  };

  return (
    <div>
      <h2>Film Detail</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : !selectedFilm ? (
        <div>No Film</div>
      ) : (
        <div id="film-details" className="film-details">
          <div id="film-image" className="film-image">
            <img src={`https://image.tmdb.org/t/p/original${selectedFilm.backdrop_path}`} alt={selectedFilm.title} />
          </div>
          <div id="film-info" className="film-info">
            <h2>{selectedFilm.title}</h2>
            <p id="film-vote-average">Vote Average: {selectedFilm.vote_average}</p>
            <p id="film-release-date">Release Date: {formatDate(selectedFilm.release_date)}</p>
            <p id="film-overview">Overview: {selectedFilm.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilmDetail;
