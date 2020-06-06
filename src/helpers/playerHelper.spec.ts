import { createNewPlayer } from './playerHelper';

describe('the createNewPlayer method', () => {
  it('returns a new player object when called', () => {
    const newPlayer = createNewPlayer();

    expect(newPlayer).toBeInstanceOf(Object);
    expect(newPlayer.id.length).toBeGreaterThan(0);
    expect(newPlayer.name).toBe('');
    expect(newPlayer.initiative).toBe('');
  });
});
