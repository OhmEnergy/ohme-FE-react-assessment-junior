import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

/**
 * 1. Create routes for the film list and film detail pages
 * 2. Add a link to the film detail page on the film list page
 */

function App() {
  return (
    <div>
      <h1>Ohme Frontend React Assessment</h1>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank" rel="noreferrer">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

export default App;
