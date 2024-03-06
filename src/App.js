import { useRoutes } from "react-router-dom";
import { ROUTES } from "./route/routes"; 
import './App.css'

function App() {
  return useRoutes(ROUTES);

}


export default App;
