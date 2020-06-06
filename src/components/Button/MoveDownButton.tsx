import React from 'react';

import DownIcon from '../../../assets/chevron-down.svg';
import './Button.less';

export const MoveDownButton = ({ onClick }: IButtonProps) => (
  <button className="move-btn" onClick={onClick}>
    <img src={DownIcon} alt="move player down" />
  </button>
);
