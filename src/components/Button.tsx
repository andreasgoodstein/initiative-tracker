import React from 'react';

import AddPlayerIcon from '../../assets/person-add.svg';
import NextPlayerIcon from '../../assets/arrow-forward-circle.svg';
import RemovePlayerIcon from '../../assets/close.svg';
import ResetIcon from '../../assets/refresh.svg';

import './Button.less';
import { ButtonType } from '../types/enums';

type ButtonProps = {
  onClick: () => void;
  type: ButtonType;
  text?: string;
};

export const Button = ({ onClick, type, text }: ButtonProps) => {
  switch (type) {
    case ButtonType.AddPlayer:
      return (
        <button onClick={onClick}>
          <img src={AddPlayerIcon} />
        </button>
      );

    case ButtonType.NextPlayer:
      return (
        <button onClick={onClick}>
          <img src={NextPlayerIcon} />
        </button>
      );

    case ButtonType.RemovePlayer:
      return (
        <button className="delete-btn" onClick={onClick}>
          <img src={RemovePlayerIcon} />
        </button>
      );

    case ButtonType.Reset:
      return (
        <button className="reset-btn" onClick={onClick}>
          <img src={ResetIcon} />
        </button>
      );

    default:
      return <button onClick={onClick}>{text}</button>;
  }
};
