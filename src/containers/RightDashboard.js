import React from "react";

import Toogle from "../components/Toogle";
import CityNameRight from "../components/CityNameRight";

export default function RightDashboard() {
  return (
    <div className="right-dashboard">
      <Toogle />
      <CityNameRight />
      {
        // ciudad, pais, fecha con Date
        // today estatico deg  e icono del sol weather.weather[0].main
        //cuadritos de viento, humedad, nubes = clouds.all
      }
    </div>
  );
}
