import {useState} from 'react'

export default function useColors() {
    const [colors, setColors] = useState([
        { name: 'red', value: '#FF0000' },
        { name: 'blue', value: '#0000FF' },
        { name: 'green', value: '#00FF00' },
      ]);
    
      const addColor = (newColor) => {
        const colorExists = colors.some((color) => color.name === newColor.name);
    
        if (!colorExists) {
          setColors([newColor, ...colors]);
        }
      };
      return[colors, addColor]
}


