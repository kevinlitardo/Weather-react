import React, { useContext } from "react";

import LeftDashboard from "./containers/LeftDashboard";
import { WeatherProvider } from "./context/WeatherContext";
import CardsDashboard from "./containers/CardsDashboard";
import RightDashboard from "./containers/RightDashboard";

export default function App() {
  return (
    <WeatherProvider>
      <>
        <LeftDashboard />
        <CardsDashboard />
        <RightDashboard />
      </>
    </WeatherProvider>
  );
}

// apiKye= 1cd9f7b7eeeed817073e182c2f5b6162
// https://api.openweathermap.org/data/2.5/weather?q=quito&appid=1cd9f7b7eeeed817073e182c2f5b6162
// #ffbd50
// a2acff
// adb1cc
//333866
// Font: poppins
