import React from 'react';
import { Link } from 'react-router-dom';

function ColorsList({colors}) {

  return (
    <div>
      <h1>Colors List</h1>
      <Link to="/colors/new">Add New Color</Link>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsList;
