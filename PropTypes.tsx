import { Component } from 'react';

// Define props for HOC
export type HocProps = {
  HocComponent: Component;
};

// Define props we want to the component
export type ComponentProps = {
  isHovered: boolean;
};
