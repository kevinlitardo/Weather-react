import React, { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function CityWind() {
  const { weather, loading } = useContext(WeatherContext);

  return (
    <div>
      {!loading && (
        <div className="wind">
          <h2>Wind</h2>
          <h3>Speed</h3>
          <span>{weather.wind.speed}</span>
          <h3>Degrees</h3>
          <span>{weather.wind.deg}</span>
        </div>
      )}
    </div>
  );
}
