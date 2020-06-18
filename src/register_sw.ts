import { CAN_UPDATE_KEY } from './config';
/* istanbul ignore file */

import { showUpdateModal } from './helpers/pwaHelper';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    const registration = await navigator.serviceWorker.register(
      './service_worker.ts'
    );

    registration.onupdatefound = serviceWorkerUpdate;
  });

  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data === CAN_UPDATE_KEY) {
      showUpdateModal();
    }
  });
}

function serviceWorkerUpdate(this: ServiceWorkerRegistration) {
  const { installing } = this;

  if (!installing) {
    return;
  }

  installing.onstatechange = () => {
    if (installing.state === 'installed') {
      showUpdateModal();
    }
  };
}
