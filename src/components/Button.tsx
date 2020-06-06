import React from 'react';

import AddPlayerIcon from '../../assets/person-add.svg';
import DownIcon from '../../assets/chevron-down.svg';
import NextPlayerIcon from '../../assets/arrow-forward-circle.svg';
import RemovePlayerIcon from '../../assets/close.svg';
import ResetIcon from '../../assets/refresh.svg';
import UpIcon from '../../assets/chevron-up.svg';

import './Button.less';

type ButtonProps = {
  onClick: () => void;
  type?: ButtonType;
  text?: string;
};

export const Button = ({ onClick, type, text }: ButtonProps) => {
  switch (type) {
    case ButtonType.AddPlayer:
      return (
        <button onClick={onClick}>
          <img src={AddPlayerIcon} alt="add player" />
        </button>
      );

    case ButtonType.MoveDown:
      return (
        <button className="move-btn" onClick={onClick}>
          <img src={DownIcon} alt="move player down" />
        </button>
      );

    case ButtonType.MoveUp:
      return (
        <button className="move-btn" onClick={onClick}>
          <img src={UpIcon} alt="move player up" />
        </button>
      );

    case ButtonType.NextPlayer:
      return (
        <button onClick={onClick}>
          <img src={NextPlayerIcon} alt="next player" />
        </button>
      );

    case ButtonType.RemovePlayer:
      return (
        <button className="delete-btn" onClick={onClick}>
          <img src={RemovePlayerIcon} alt="remove player" />
        </button>
      );

    case ButtonType.Reset:
      return (
        <button className="reset-btn" onClick={onClick}>
          <img src={ResetIcon} alt="reset" />
        </button>
      );

    default:
      return <button onClick={onClick}>{text}</button>;
  }
};
