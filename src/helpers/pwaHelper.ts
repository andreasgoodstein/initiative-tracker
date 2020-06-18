const UPDATE_MODAL_ID = 'update-modal';

export function showUpdateModal() {
  const updateModal = document.getElementById(
    UPDATE_MODAL_ID
  ) as HTMLDivElement;

  if (!updateModal) {
    return;
  }

  updateModal.style.visibility = 'visible';
}
