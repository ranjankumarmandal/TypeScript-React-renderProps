import React from 'react';

interface Props {
  count: number;
  incrementCounter: () => void;
}

const ClickCounter = (props: Props) => {
  return (
    <>
      <button onClick={props.incrementCounter}>Increment: {props.count}</button>
    </>
  );
};

export default ClickCounter;
