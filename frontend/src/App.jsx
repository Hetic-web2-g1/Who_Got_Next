import { Link } from "react-router-dom";
import {Connexion} from "./components/Connexion";

export default function App() {
  return (
    <main>
      <h1>Frontend</h1>
      <nav>
        <li>    
          <Link to="/Evenement">Evenement</Link>          
        </li> 
        <li>
          <Link to="/JoinGroup">JoinGroup</Link>
        </li>
        <li>
          <Link to="/Homepage">Homepage</Link>
        </li>
      </nav>
      <Connexion/>
    </main>
  )
}
