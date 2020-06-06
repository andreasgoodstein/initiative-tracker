import { useState } from 'react';

const storageProvider =
  typeof window !== 'undefined' && window.localStorage
    ? window.localStorage
    : { getItem: () => {}, setItem: () => {} };

export const useLocalStorageState = <T>(
  storageKey: string,
  initialValue: T
): [T, (value: T) => void] => {
  const [getStoredValue, setStoredValue] = useState<T>(() => {
    const value = storageProvider.getItem(storageKey);

    return value ? JSON.parse(value) : initialValue;
  });

  const storeValue = (value: T) => {
    setStoredValue(value);

    storageProvider.setItem(storageKey, JSON.stringify(value));
  };

  return [getStoredValue, storeValue];
};
