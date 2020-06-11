import { renderHook, act } from '@testing-library/react-hooks';

import { usePlayerList } from './usePlayerList';

describe('the usePlayerList hook', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it('does not crash or remove players from list when given invalid id', () => {
    const { result } = renderHook(() => usePlayerList());

    expect(result.current.playerList.length).toBe(0);

    act(() => {
      result.current.addPlayer();
    });

    expect(result.current.playerList.length).toBe(1);

    act(() => {
      result.current.removePlayer('idNotInList');
    });

    expect(result.current.playerList.length).toBe(1);
  });

  it('does not crash or move a player when given invalid id', () => {
    const { result } = renderHook(() => usePlayerList());

    expect(result.current.playerList.length).toBe(0);

    act(() => {
      result.current.addPlayer();
    });
    act(() => {
      result.current.addPlayer();
    });

    expect(result.current.playerList.length).toBe(2);
    const preMovePlayerList = [...result.current.playerList];

    act(() => {
      result.current.movePlayer('idNotInList', 'down');
    });
    act(() => {
      result.current.movePlayer('idAlsoNotInList', 'up');
    });

    expect(result.current.playerList).toEqual(preMovePlayerList);
    expect(result.current.playerList.length).toBe(2);
  });
});
