import React, { Component } from 'react';
import './style.css';

export interface WithLoadingProps {
  ishovered: boolean;
}

export default function Hoc<P extends WithLoadingProps>(
  HocComponent: React.ComponentType<P>
) {
  const [ishovered, setHover] = React.useState(false);
  const green: string = '#11e619';
  const red: string = '#9a0426';
  const [colorCode, setColor] = React.useState('#11e6');

  function colorChange() {
    const newColor: string = colorCode === green ? red : green;
    setColor(newColor);
  }

  return class extends Component<{}> {
    render() {
      return (
        <HocComponent
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          ishovered={ishovered}
          onClick={colorChange}
          color={colorCode}
        />
      );
    }
  };
}
