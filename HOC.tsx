import React, { Component } from 'react';
import './style.css';

export interface WithLoadingProps {
  isHovered: boolean;
}
export interface WithLoadingPropsData {
  data: object;
}

export default function Hoc<P extends WithLoadingProps>(
  HocComponent: React.ComponentType<P>,
  datas: Readonly<{}>
) {
  const [isHovered, setHover] = React.useState(false);

  return class extends Component<{}, WithLoadingPropsData> {
    constructor(props) {
      super(props);
      this.state = {
        data: datas,
      };
    }
    render() {
      return (
        <HocComponent
          data={this.state.data}
          {...this.props}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          isHovered={isHovered}
        />
      );
    }
  };
}
