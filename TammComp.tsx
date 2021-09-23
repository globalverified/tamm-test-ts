// //here we are using properties of mouse hover from HOC alongwith additional data (isHovered and data)

import React, { useState } from 'react';
import './style.css';
import Hoc from './HOC';

export interface WithHOCProps {
  isHovered: boolean;
  data: Array<any>;
  color: string;
}

export default function ProjectComponent(props: WithHOCProps) {
  const hoverText: string = props.isHovered ? 'IN' : 'Out';
  return (
    <div>
      <h3>TAMM HOC and Functional component using StackBlitz..</h3>
      <h2 {...props} style={{ color: props.color }}>
        Mouse is Hover {hoverText} to Component.
      </h2>
    </div>
  );
}

// Note: component is passed in HOC using App.tsx line:7
// Used above app.tsx in order to maintain unique code flow
