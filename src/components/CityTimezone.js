import React, { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function CityTimezone() {
  const { weather, loading } = useContext(WeatherContext);

  return (
    <div>
      {!loading && (
        <div className="timezone">
          <h2>Timezone</h2>
          <h3>Longitude</h3>
          <span>{weather.coord.lon}</span>
          <h3>Latitude</h3>
          <span>{weather.coord.lat}</span>
        </div>
      )}
    </div>
  );
}
