import React from 'react';

export interface Props {
  count: number;
  increamentCounter: () => void;
}

const ClickCounter = (props: Props) => {
  return (
    <>
      <button onClick={props.increamentCounter}>
        Click Increment: {props.count}
      </button>
    </>
  );
};

export default ClickCounter;
