import { createNewPlayer, getOverlappingInitiativeMap } from './playerHelper';

jest.mock('uuid', () => ({ v1: () => 'testUUID' }));

describe('the createNewPlayer method', () => {
  it('returns a new player object when called', () => {
    const newPlayer = createNewPlayer();

    expect(newPlayer).toBeInstanceOf(Object);
    expect(newPlayer.id).toBe('testUUID');
    expect(newPlayer.name).toBe('');
    expect(newPlayer.initiative).toBe('');
  });
});

describe('the getOverlappingInitiativeMap method', () => {
  it('given an empty input it returns an empty map', () => {
    const map = getOverlappingInitiativeMap([]);

    expect(map).toBeInstanceOf(Map);
    expect(map.size).toBe(0);
  });
});
