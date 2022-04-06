import React, { useState } from 'react';

interface Props {
  render: () => JSX.Element;
}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>counter</p>
    </div>
  );
};

export default Counter;
