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

function FilmList() {
  return (
    <div>
      {/* TODO - search input */}
      <div className="film-grid">
        {/* TODO - list of films */}
        <div id='film-item-1' className="film-container">
          <div className="poster">
            <img id="film-poster-1" src='' alt='' />
          </div>
          <div>
            <div id='film-title-1'>
              {/* TODO - film title */}
            </div>
            <div id='film-vote-average-1'>
              {/* TODO - vote average */}  
            </div>
            <div id='film-release-date-1'>
              {/* TODO - film date (e.g. Jan 9th, 2024) */}  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmList;
