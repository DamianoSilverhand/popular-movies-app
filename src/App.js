import {  Link } from 'react-router-dom';

// import './App.css';

function App() {
  return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'}  className="navbar-brand">Popular Movies</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/liked'} className="nav-link">Favorites</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
  

  );
}

export default App;
