import { useState } from 'react';

import { getLocalStorage } from '../persistance/localStorage';

export const useLocalStorageState = <T>(
  storageKey: string,
  initialValue: T
): [T, (value: T) => void] => {
  const localStorage = getLocalStorage();

  const [getStoredValue, setStoredValue] = useState<T>(() => {
    const value = localStorage.getItem(storageKey);

    return value ? JSON.parse(value) : initialValue;
  });

  const storeValue = (value: T) => {
    localStorage.setItem(storageKey, JSON.stringify(value));

    setStoredValue(value);
  };

  return [getStoredValue, storeValue];
};
