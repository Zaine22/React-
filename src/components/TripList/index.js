import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./index.css";

export default function Index() {
  let [url, setUrl] = useState("http://localhost:3000/trips");

  let { data: trips } = useFetch(url);

  return (
    <div className="container">
      <div className="flex-container">
        <h1>ready to go</h1>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=Myanmar")}
        >
          Trip in Myanmar
        </button>
        <ul className="trip-list">
          {trips &&
            trips.map((trip) => (
              <li key={trip.id} className="trip">
                <h3>{trip.name}</h3>
                <p>{trip.price} MMK</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
