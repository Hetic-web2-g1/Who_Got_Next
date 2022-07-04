import React from 'react'
import {Link} from 'react-router-dom'

export const Evenement = () => {
  return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Evenement</h2>
        <li>
          <Link to="/">Home</Link>
        </li>
      </main>
    );
  }

export default Evenement;