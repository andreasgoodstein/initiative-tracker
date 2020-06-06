import React from 'react';

import NextPlayerIcon from '../../../assets/arrow-forward-circle.svg';
import './Button.less';

export const NextPlayerButton = ({ onClick }: IButtonProps) => (
  <button onClick={onClick}>
    <img src={NextPlayerIcon} alt="next player" />
  </button>
);
