import React from 'react';

import UpIcon from '../../../assets/chevron-up.svg';
import './Button.less';

export const MoveUpButton = ({ onClick }: IButtonProps) => (
  <button className="move-btn" onClick={onClick}>
    <img src={UpIcon} alt="move player up" />
  </button>
);
