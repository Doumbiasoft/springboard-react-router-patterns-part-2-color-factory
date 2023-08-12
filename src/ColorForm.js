import React, { useState } from 'react';
import { useHistory ,Link} from 'react-router-dom';

function ColorForm({ addColor }) {
  const [newColor, setNewColor] = useState('#000000');
  const [newColorName, setNewColorName] = useState('');
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    if (newColor && newColorName) {
      addColor({ name: newColorName, value: newColor });
      history.push('/colors');
    }
  };

  return (
    <>
      <div>
      <h1>Add New Color</h1>
        <Link to="/">GO Back</Link>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color Name"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
        />
        <button type="submit">Add Color</button>
      </form>
      
    </div>
    <div>
    </div>
    
    </>

  );
}

export default ColorForm;
