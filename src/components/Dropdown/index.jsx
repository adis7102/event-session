import React from "react";

import './style.scss';

const Dropdown = (props) => {
  const { name, title, onChange, value, options } = props;

  return (
    <div className="dropdown">
      <p className="title">{title}</p>
      <select 
        name={name}
        onChange={(e) => onChange(e)}
        value={value}
        required
      >
      {(options || []).map((item, index) => {
       const { title, value } = item || {};
       
       return (
        <option key={index} value={value}>{title}</option>
       )
      })}
      </select>
    </div>
  );
};

export default Dropdown;
