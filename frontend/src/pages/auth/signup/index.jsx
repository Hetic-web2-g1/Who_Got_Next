import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Signup</h2>
      <li>
        <Link to="/">Home</Link>
      </li>
    </main>
  );
};

export default Signup;
