import React from 'react';

interface Props {
  render: () => JSX.Element;
}

const Counter = (props: Props) => {
  return (
    <div>
      <p>counter</p>
    </div>
  );
};

export default Counter;
