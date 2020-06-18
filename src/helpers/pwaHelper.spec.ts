import { showUpdateModal } from './pwaHelper';

describe('the showUpdateModal method', () => {
  it('does nothing if modal div not found', () => {
    expect(() => showUpdateModal()).not.toThrow();
  });

  it('sets visibility style to visible', () => {
    document.body.innerHTML =
      '<div id="update-modal" style="visibility: hidden;"></div>';

    expect(
      document.body.innerHTML.includes('style="visibility: visible;"')
    ).toBeFalsy();

    showUpdateModal();

    expect(
      document.body.innerHTML.includes('style="visibility: visible;"')
    ).toBeTruthy();
  });
});
