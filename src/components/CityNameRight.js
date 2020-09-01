import React, { useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function CityTemp() {
  const { weather, loading } = useContext(WeatherContext);

  // Obtener Fecha bitch
  const miFechaActual = new Date();
  const date = miFechaActual.getDate();
  let month = miFechaActual.getMonth();
  let day = miFechaActual.getDay();

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  console.log(day, date, month);

  return (
    <div>
      {!loading && (
        <div className="right-name">
          <h2>{weather.name}</h2>
          <h3>{weather.sys.country}</h3>
          <h3>{`${day}, ${date} ${month}`}</h3>
        </div>
      )}
    </div>
  );
}
