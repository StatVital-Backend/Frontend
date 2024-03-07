import { useRoutes } from "react-router-dom";
import { ROUTES } from "./route/routes"; 
import './App.css'

function App() {
  return useRoutes(ROUTES);

  return (
    <Router>
      <div className="App">{routing}</div>
    </Router>
  );
}


export default App;
