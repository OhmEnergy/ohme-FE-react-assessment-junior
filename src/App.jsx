import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

/**
 * 1. Fetch the list of films from the API
 * 2. Display the list of films in the grid
 * 3. Display the title, vote average, and release date for each film
 * 4. Display the film poster for each film
 * 5. Format the date into this format: "Jan 9th, 2024"
 */

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log("🚀 ~ file: App.jsx:16 ~ getFilms ~ API_KEY:", API_KEY);
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
    const data = await response.json();
    console.log("🚀 ~ getFilms ~ data.results:", data.results);
    setFilms(data.results);
    console.log(data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <div>
        <h1>Ohme Frontend React Assessment</h1>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Film List</h2>
      <div className="film-grid">
        {films.map((film, index) => (
          <div key={film.id} id={`film-item-${index}`} className="film-container">
            <div className="poster">
              <img src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title} />
            </div>
            <div>
              <div id={`film-title-${index}`}>{film.title}</div>
              <div id={`film-vote-average-${index}`}>Vote Average: {film.vote_average}</div>
              <div id={`film-release-date-${index}`}>Release Date: {formatDate(film.release_date)}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
