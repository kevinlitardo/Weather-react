import React, { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function LeftDashboard() {
  const { changeCity } = useContext(WeatherContext);

  const getValue = (e) => {
    changeCity(e.target.value);
  };

  return (
    <section>
      <h1>Weather App</h1>
      {/* <select onChange={getValue}>
        <option value="Tokyo">Tokyo</option>
        <option value="Canada">Canada</option>
        <option value="Morelia">Morelia</option>
        <option value="Quito">Quito</option>
        <option value="France">France</option>
      </select> */}
    </section>
  );
}
