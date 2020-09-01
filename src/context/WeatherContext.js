import React, { useState, createContext, useEffect } from "react";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [cityName, setCityName] = useState("london");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  // Muestra un mensaje de error cuando responda 404
  const [handleError, setHandleError] = useState(false);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1cd9f7b7eeeed817073e182c2f5b6162`;

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      // Valida que la ciudad exista
      if (data.cod !== 200) {
        setHandleError(true);
        return setCityName("london");
      }
      setWeather(data);
      setLoading(false);
      setHandleError(false);
    };

    fetcher();
  }, [cityName]);

  const changeCity = (city) => {
    setCityName(city);
  };

  return (
    <WeatherContext.Provider
      value={{
        changeCity,
        weather,
        loading,
        handleError,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
