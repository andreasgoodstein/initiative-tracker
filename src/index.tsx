import React from 'react';
import { PlayerList } from './components/PlayerList';

renderApplication();

// Async import of react-dom for better bundling
async function renderApplication() {
  const { render } = await import('react-dom');

  render(<PlayerList />, document.getElementById('root'));
}
