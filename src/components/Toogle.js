import React from "react";

export default function Toogle() {
  const handleChange = () => {
    const root = document.querySelector("#root");
    root.classList.toggle("dark");
    console.log(root);
  };

  return (
    <div className="toggle">
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
}
