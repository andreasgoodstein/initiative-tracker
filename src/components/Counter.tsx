import React from 'react';

import './Counter.less';

type CounterProps = {
  count: number;
  label: string;
};

export const Counter = ({ count, label }: CounterProps) => {
  return (
    <div className="counter">
      <span>{label}</span>
      <span>{count}</span>
    </div>
  );
};
