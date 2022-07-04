import React from 'react'
import {Link} from 'react-router-dom'

export const Evenement = () => {
  
    const user = {
      user: "true"
    }

  function createUser(data) {
    fetch(`http://localhost:8000/api_call/`, {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  createUser(user)

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