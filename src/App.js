import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import  ROUTES  from '../src/routes/routes'

function App() {
  // const routing = useRoutes(ROUTES);

  return (
    // <Router>
    //   <div className="App">{routing}</div>
    // </Router>
    useRoutes(ROUTES)
  );
}

export default App;
