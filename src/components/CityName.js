import React, { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function CityName() {
  const { weather, loading } = useContext(WeatherContext);

  return (
    <div>
      {!loading && (
        <div className="name">
          <h2>{weather.name}</h2>
          <h2>{weather.sys.country}</h2>
        </div>
      )}
    </div>
  );
}
