import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ColorDetail({ colors }) {
  const { color } = useParams();

  const selectedColor = colors.find((c) => c.name === color);

  if (!selectedColor) {
    return <p>Color not found</p>;
  }

  return (
    <div>
      <h1>{selectedColor.name} Color</h1>
      <Link to="/">GO Back</Link>
      <div style={{ width: 'calc(100vh)', height: 'calc(100vh)', backgroundColor: selectedColor.value }}></div>
      <div>
      </div>
    </div>
  );
}

export default ColorDetail;
