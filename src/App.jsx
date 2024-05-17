import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory, useLocation, Link} from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import LoadingAnimation from '../components/loadingAnimation'

const App = ({children}) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location =useLocation();

  useEffect(() => {
    setLoading(false);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    setLoading(true);
    history.push(path);

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


