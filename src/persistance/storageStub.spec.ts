import { storageStub } from './storageStub';

describe('the storageStub', () => {
  it('getItem returns null', () => {
    expect(storageStub.getItem('')).toBeNull();
  });

  it('setItem returns undefined', () => {
    expect(storageStub.setItem('', '')).toBeUndefined();
  });
});
