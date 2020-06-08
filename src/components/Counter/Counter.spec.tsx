import React from 'react';

import { render, screen } from '@testing-library/react';

import { Counter } from './Counter';

describe('the <Counter /> component', () => {
  it('displays the provided label and count', () => {
    const props = {
      label: 'testLabel',
      count: 3,
    };

    render(<Counter label={props.label} count={props.count} />);

    expect(document.getElementsByClassName('counter').length).toBe(1);
    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.count.toString())).toBeInTheDocument();
  });
});
