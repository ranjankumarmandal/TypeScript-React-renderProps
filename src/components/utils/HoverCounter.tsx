import React from 'react';
import { Props } from './ClickCounter';

const HoverCounter = (props: Props) => {
  return (
    <>
      <h2 onMouseOver={props.increamentCounter}>
        Hover Increment: {props.count}
      </h2>
    </>
  );
};

export default HoverCounter;
