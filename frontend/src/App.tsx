import { Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <h1>Frontend</h1>
      <nav>        
        <Link to="/Evenement">Evenement</Link>
        <Link to="/JoinGroup">JoinGroup</Link>
      </nav>
    </main>
  )
}
