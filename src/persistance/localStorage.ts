import { storageStub } from './storageStub';

export const getLocalStorage = (): IStorageProvider => {
  const isLocalStorageAvailable =
    typeof window !== 'undefined' && window.localStorage;

  return isLocalStorageAvailable ? window.localStorage : storageStub;
};
