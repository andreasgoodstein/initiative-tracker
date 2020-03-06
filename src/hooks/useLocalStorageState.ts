import { useState } from 'react';

export const useLocalStorageState = <T>(
  storageKey: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [getStoredValue, setStoredValue] = useState<T>(() => {
    const value = window.localStorage.getItem(storageKey);

    return value ? JSON.parse(value) : initialValue;
  });

  const storeValue = (value: T) => {
    setStoredValue(value);

    window.localStorage.setItem(storageKey, JSON.stringify(value));
  };

  return [getStoredValue, storeValue];
};
