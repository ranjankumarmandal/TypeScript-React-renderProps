import React, { useState } from 'react';

interface Props {
  render: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element;
}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  const increamentCounter = () => {
    setCount(count + 1);
  };

  return <div>{props.render(count, increamentCounter)}</div>;
};

export default Counter;
