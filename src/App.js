import React, { useEffect, useState } from "react";
import "./styles.css";
import breakify from "./breakify";

//https://www.youtube.com/watch?v=OVp2muKTkdg

export default function App() {
  const [firstName, setFirstName] = useState("Breaking");
  const [lastName, setLastName] = useState("Bad");
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    setFirst(breakify(firstName));
    setSecond(breakify(lastName));
  }, [firstName, lastName]);

  return (
    <div className="content">
      <div className="container">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <h1>{first}</h1>
          <h1>{second}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="firstName">First Name </label>

            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
              <label htmlFor="lastName">Last Name </label>
            </p>

            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            Breakify
          </button>
        </form>
      </div>
    </div>
  );
}
