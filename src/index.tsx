/* istanbul ignore file */

import React from 'react';

import { PlayerList } from './components/PlayerList/PlayerList';

renderApplication();

// Async import of react-dom for bundle splitting
async function renderApplication() {
  const { render } = await import('react-dom');

  render(<PlayerList />, document.getElementById('root'));
}
