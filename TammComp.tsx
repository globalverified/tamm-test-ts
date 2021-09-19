// //here we are using properties of mouse hover from HOC alongwith additional data (isHovered and data)

import React, { useState } from 'react';
import './style.css';

export interface WithHOCProps {
  isHovered: boolean;
  data: Array<any>;
}

export default function ProjectComponent(props: WithHOCProps) {
  const hoverText: string = props.isHovered ? 'IN' : 'Out';
  let green: string = '#11e619';
  let red: string = '#9a0426';
  const [colorCode, setColor] = useState('#11e6');

  function colorChange() {
    const newColor: string = colorCode === green ? red : green;
    setColor(newColor);
  }

  return (
    <div>
      <h3>TAMM Component using StackBlitz..</h3>
      <h2 {...props} style={{ color: colorCode }} onClick={colorChange}>
        Mouse is Hover {hoverText} to Component.
      </h2>
    </div>
  );
}
