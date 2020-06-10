import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';

import { act } from 'react-dom/test-utils';
import { PlayerList } from './components/PlayerList/PlayerList';

describe('the initiative-tracker application', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('document has a round counter, list headers, empty list, add  player button and next turn button. document has no input elements', () => {
    render(<PlayerList />);

    expect(screen.getByText('Round')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Initiative')).toBeInTheDocument();
    expect(screen.getByAltText('add player')).toBeInTheDocument();
    expect(screen.getByAltText('next player')).toBeInTheDocument();

    expect(() => screen.getByPlaceholderText('Init')).toThrow();
  });

  it('creates an li player item in the list each time the add player button is clicked', () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');

    expect(() => screen.getByPlaceholderText('Init')).toThrow();

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    expect(screen.getAllByPlaceholderText('Init').length).toBe(2);
  });

  it('stores a characters name and initiative in localState when input fields are updated', async () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');

    expect(window.localStorage.getItem('playerList')).toBeNull();

    fireEvent.click(addPlayerButton);

    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'testName' },
    });
    fireEvent.change(screen.getByPlaceholderText('Init'), {
      target: { value: '3' },
    });

    await act(async () => {
      await new Promise((r) => setTimeout(() => r(), 400));
    });

    expect(
      window.localStorage.getItem('playerList')?.includes('testName')
    ).toBeTruthy();

    expect(
      window.localStorage.getItem('playerList')?.includes('3')
    ).toBeTruthy();
  });

  it('removes an li player item from the list when the players delete button is pressed', () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');

    expect(() => screen.getByPlaceholderText('Init')).toThrow();

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    expect(screen.getAllByPlaceholderText('Init').length).toBe(2);

    const playerDeleteButtonList = screen.getAllByAltText('remove player');

    fireEvent.click(playerDeleteButtonList[1]);
    expect(screen.getAllByPlaceholderText('Init').length).toBe(1);

    fireEvent.click(playerDeleteButtonList[0]);
    expect(() => screen.getByPlaceholderText('Init')).toThrow();
  });

  it('keep turn with current player if previous player is removed', () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');
    const nextPlayerButton = screen.getByAltText('next player');

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    const playerDeleteButtonList = screen.getAllByAltText('remove player');

    fireEvent.click(nextPlayerButton);

    expect(window.localStorage.getItem('playerTurn')).toBe('1');

    fireEvent.click(playerDeleteButtonList[0]);

    expect(window.localStorage.getItem('playerTurn')).toBe('0');
  });

  it('sets playerTurn to new last player if current last player has turn and is removed', () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');
    const nextPlayerButton = screen.getByAltText('next player');

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    const playerDeleteButtonList = screen.getAllByAltText('remove player');

    fireEvent.click(nextPlayerButton);
    fireEvent.click(nextPlayerButton);

    expect(window.localStorage.getItem('playerTurn')).toBe('2');

    fireEvent.click(playerDeleteButtonList[2]);

    expect(window.localStorage.getItem('playerTurn')).toBe('1');
  });

  it('next player button does nothing if no players are present', () => {
    render(<PlayerList />);

    const roundCounterElement = document.querySelector(
      '.round-counter'
    ) as HTMLElement;

    const nextTurnButton = screen.getByAltText('next player');

    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();
    expect(window.localStorage.getItem('playerTurn')).toBeNull();

    fireEvent.click(nextTurnButton);
    fireEvent.click(nextTurnButton);
    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();
    expect(window.localStorage.getItem('playerTurn')).toBeNull();
  });

  it('increments and round counter every time the top player starts its turn, and stores player turn and round count in localStorage', () => {
    render(<PlayerList />);

    const roundCounterElement = document.querySelector(
      '.round-counter'
    ) as HTMLElement;

    const addPlayerButton = screen.getByAltText('add player');
    const nextTurnButton = screen.getByAltText('next player');

    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();
    expect(window.localStorage.getItem('playerTurn')).toBeNull();

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    fireEvent.click(nextTurnButton);
    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();
    expect(window.localStorage.getItem('playerTurn')).toBe('1');

    fireEvent.click(nextTurnButton);
    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();
    expect(window.localStorage.getItem('playerTurn')).toBe('2');

    fireEvent.click(nextTurnButton);
    expect(getByText(roundCounterElement, '2')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBe('2');
    expect(window.localStorage.getItem('playerTurn')).toBe('0');
  });

  it('resets the round counter to 1, when pressing the reset button', () => {
    render(<PlayerList />);

    const roundCounterElement = document.querySelector(
      '.round-counter'
    ) as HTMLElement;

    const addPlayerButton = screen.getByAltText('add player');
    const nextTurnButton = screen.getByAltText('next player');

    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBeNull();

    fireEvent.click(addPlayerButton);
    fireEvent.click(nextTurnButton);

    expect(getByText(roundCounterElement, '2')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBe('2');

    const resetButton = screen.getByAltText('reset');

    fireEvent.click(resetButton);

    expect(getByText(roundCounterElement, '1')).toBeInTheDocument();
    expect(window.localStorage.getItem('roundCount')).toBe('1');
  });

  it('displays up and down arrow next to players with non-unique initiatives', async () => {
    render(<PlayerList />);

    expect(() => screen.getAllByAltText('move player up')).toThrow();
    expect(() => screen.getAllByAltText('move player down')).toThrow();

    const addPlayerButton = screen.getByAltText('add player');

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[0], {
        target: { value: '3' },
      });

      await new Promise((r) => setTimeout(() => r(), 400));
    });

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[1], {
        target: { value: '3' },
      });

      await new Promise((r) => setTimeout(() => r(), 400));
    });

    expect(screen.getAllByAltText('move player up').length).toBe(2);
    expect(screen.getAllByAltText('move player down').length).toBe(2);
  });

  it('moves players in display order when using up and down buttons', async () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[0], {
        target: { value: 'a' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[0], {
        target: { value: '3' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[1], {
        target: { value: 'b' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[1], {
        target: { value: '3' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });

    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('b');

    fireEvent.click(screen.getAllByAltText('move player down')[0]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('b');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('a');

    fireEvent.click(screen.getAllByAltText('move player down')[1]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('b');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('a');

    fireEvent.click(screen.getAllByAltText('move player up')[1]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('b');

    fireEvent.click(screen.getAllByAltText('move player up')[0]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('b');
  });

  it('players cant be moved above or below their set initiative score', async () => {
    render(<PlayerList />);

    const addPlayerButton = screen.getByAltText('add player');

    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);
    fireEvent.click(addPlayerButton);

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[0], {
        target: { value: 'top' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[0], {
        target: { value: '3' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[1], {
        target: { value: 'a' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[1], {
        target: { value: '2' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[2], {
        target: { value: 'b' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[2], {
        target: { value: '2' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });

    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Name')[3], {
        target: { value: 'bottom' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });
    await act(async () => {
      fireEvent.change(screen.getAllByPlaceholderText('Init')[3], {
        target: { value: '1' },
      });

      await new Promise((r) => setTimeout(() => r(), 305));
    });

    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('top');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[2] as HTMLInputElement).value
    ).toBe('b');
    expect(
      (screen.getAllByPlaceholderText('Name')[3] as HTMLInputElement).value
    ).toBe('bottom');

    fireEvent.click(screen.getAllByAltText('move player up')[0]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('top');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[2] as HTMLInputElement).value
    ).toBe('b');
    expect(
      (screen.getAllByPlaceholderText('Name')[3] as HTMLInputElement).value
    ).toBe('bottom');

    fireEvent.click(screen.getAllByAltText('move player down')[1]);
    expect(
      (screen.getAllByPlaceholderText('Name')[0] as HTMLInputElement).value
    ).toBe('top');
    expect(
      (screen.getAllByPlaceholderText('Name')[1] as HTMLInputElement).value
    ).toBe('a');
    expect(
      (screen.getAllByPlaceholderText('Name')[2] as HTMLInputElement).value
    ).toBe('b');
    expect(
      (screen.getAllByPlaceholderText('Name')[3] as HTMLInputElement).value
    ).toBe('bottom');
  });
});
