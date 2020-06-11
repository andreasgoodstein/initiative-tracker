import { useState } from 'react';

const UPDATE_WAIT_TIMEOUT = 300;

export const useUpdateTimeout = <T extends object>(
  initialValue: T,
  externalUpdate: (arg0: T) => void
): [T, (arg0: T) => void] => {
  const [value, setValue] = useState<T>(initialValue);
  const [updateTimeout, setUpdateTimeout] = useState<Timeout>();

  const changeValueHandler = (newValue: T) => {
    clearTimeout(updateTimeout!);
    setUpdateTimeout(
      setTimeout(() => externalUpdate(newValue), UPDATE_WAIT_TIMEOUT)
    );

    setValue(newValue);
  };

  return [value, changeValueHandler];
};
