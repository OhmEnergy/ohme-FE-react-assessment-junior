import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

/**
 * 1. Fetch the list of films from the API
 * 2. Display the list of films in the grid
 * 3. Display the title, vote average, and release date for each film
 * 4. Display the film poster for each film
 * 5. Implement a loading state and error/no films state
 * 6. Format the date into this format: "Jan 9th, 2024"
 * 7. Add a search bar to filter the list of films by title
 * 8. Allow the user to click on the film and navigate to the film's page
 *
 * MovieDB URL:
 * `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`
 */

function App() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getFilms();
  }, []);

  const getFilms = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    console.log("🚀 ~ getFilms ~ data.results:", data.results);
    setFilms(data.results);
    setIsLoading(false);
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

      <h2>Films</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : !films.length ? (
        <div>No Films</div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search films..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="film-grid">
            {films
              .filter((film) => film.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((film, index) => (
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
        </div>
      )}
    </>
  );
}

export default App;
