import React, { Component } from 'react';
import './style.css';

export interface WithLoadingProps {
  isHovered: boolean;
}

export default function Hoc<P extends WithLoadingProps>(
  HocComponent: React.ComponentType<P>
) {
  const [isHovered, setHover] = React.useState(false);
  let green: string = '#11e619';
  let red: string = '#9a0426';
  const [colorCode, setColor] = React.useState('#11e6');

  function colorChange() {
    const newColor: string = colorCode === green ? red : green;
    setColor(newColor);
  }

  return class extends Component<{}> {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <HocComponent
          {...this.props}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          isHovered={isHovered}
          onClick={colorChange}
          style={{ color: colorCode }}
        />
      );
    }
  };
}
