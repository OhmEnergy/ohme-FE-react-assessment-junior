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
  return (
    <div id="film-details" className="film-details">
      <div id="film-image" className="film-image">
        {/* TODO - image */}
        <img src="" id="film-poster" alt="" />
      </div>
      <div id="film-info" className="film-info">
        <h2>{/* TODO - title */}</h2>
        <p id="film-vote-average">
          {/* TODO - vote average */}
        </p>
        <p id="film-release-date">
          {/* TODO - film date (e.g. Jan 9th, 2024) */}
        </p>
        <p id="film-overview">
          {/* TODO - film overview */}
        </p>
      </div>
    </div>
  );
}

export default FilmDetail;
