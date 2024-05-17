import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation, Link} from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LoadingAnimation from './components/loadingAnimation';

const App = ({children}) => {
  const [loading, setLoading] = useState(false);
  const location =useLocation();

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      history.push(path);
      setLoading(false);
    }, 1000); 

  };
  return(
    <Router>
      <div className="App">
        {loading && <LoadingAnimation />}
        <nav>
        <button onClick={() => handleNavigation('/')}>Index</button>
          <Link to="/about us">About us</Link>
        </nav>
        {children}
      </div>
    </Router>
  );
}

export default App;


