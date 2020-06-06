import React from 'react';

import ResetIcon from '../../../assets/refresh.svg';
import './Button.less';

export const ResetButton = ({ onClick }: IButtonProps) => (
  <button className="reset-btn" onClick={onClick}>
    <img src={ResetIcon} alt="reset" />
  </button>
);
