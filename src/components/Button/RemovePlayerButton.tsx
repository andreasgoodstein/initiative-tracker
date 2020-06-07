import React from 'react';

import RemovePlayerIcon from '../../../assets/close.svg';
import './Button.less';

export const RemovePlayerButton = ({ onClick }: IButtonProps) => (
  <button type="button" className="delete-btn" onClick={onClick}>
    <img src={RemovePlayerIcon} alt="remove player" />
  </button>
);
