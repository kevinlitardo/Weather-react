import React, { useState, useContext } from "react";

import { WeatherContext } from "../context/WeatherContext";

export default function Search() {
  const { changeCity } = useContext(WeatherContext);
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeCity(keyword);
    setKeyword("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={keyword} required />
      </form>
    </div>
  );
}
