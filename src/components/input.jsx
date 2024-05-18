import React from "react";

export default function input({handleChange,value,title,name,color}) {
  return (
    <label htmlFor="" className="sidebar-label-container">
      <input onChange={handleChange} type="radio" name={name} value={value} />
      <span className="checkmark" style={{backgroundColor:color}}></span>{title}
    </label>
  );
}
