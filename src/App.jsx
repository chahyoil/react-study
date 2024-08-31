import './App.css';
import { useState } from 'react';

const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    setShapes(
      shapes.map((shape) => {
        if(shape.type === 'circle') {
          return {
            ...shape,
            y: shape.y + 50,
          };
        } else {
          return shape;
        }
      })
    )
  }

  return (
    <>
      <button onClick={handleClick}>원만 아래로 이동</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === 'circle' ? '50%' : '',
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  );
}
