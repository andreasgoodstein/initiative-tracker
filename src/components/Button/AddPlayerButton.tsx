import React from 'react';

import AddPlayerIcon from '../../../assets/person-add.svg';
import './Button.less';

export const AddPlayerButton = ({ onClick }: IButtonProps) => (
  <button onClick={onClick}>
    <img src={AddPlayerIcon} alt="add player" />
  </button>
);
