import {
  createNewPlayer,
  getOverlappingInitiativeMap,
  movePlayerDown,
  movePlayerUp,
  sortPlayer,
} from './playerHelper';

jest.mock('uuid', () => ({ v1: () => 'testUUID' }));

const testPlayerList: IPlayer[] = [
  { id: '1', initiative: '1', canMove: false, name: '1' },
  { id: '2', initiative: '2', canMove: false, name: '2' },
  { id: '3', initiative: '2', canMove: false, name: '3' },
];

describe('the createNewPlayer method', () => {
  it('returns a new player object when called', () => {
    const newPlayer = createNewPlayer();

    expect(newPlayer).toBeInstanceOf(Object);
    expect(newPlayer.canMove).toBeFalsy();
    expect(newPlayer.id).toBe('testUUID');
    expect(newPlayer.initiative).toBe('');
    expect(newPlayer.name).toBe('');
  });
});

describe('the getOverlappingInitiativeMap method', () => {
  it('given an empty input it returns an empty map', () => {
    const map = getOverlappingInitiativeMap([]);

    expect(map).toBeInstanceOf(Map);
    expect(map.size).toBe(0);
  });

  it('given input without overlapping initiative, it returns map with all values as 1', () => {
    const input = [...testPlayerList].slice(0, 2);

    const map = getOverlappingInitiativeMap(input);

    expect(map.get('1')).toBe(1);
    expect(map.get('2')).toBe(1);
  });

  it('given input with overlapping initiative, it returns only the overlapping initative with value greater than 1', () => {
    const input = [...testPlayerList];

    const map = getOverlappingInitiativeMap(input);

    expect(map.get('1')).toBe(1);
    expect(map.get('2')).toBe(2);
  });

  it('input including player with no initiative does not change resulting map', () => {
    const input = [
      ...testPlayerList,
      { canMove: false, id: '4', initiative: '', name: '4' },
    ];

    const map = getOverlappingInitiativeMap(input);

    expect(map.get('1')).toBe(1);
    expect(map.get('2')).toBe(2);
  });
});

describe('the movePlayerDown method', () => {
  it('given input with index out of bounds it return copy of input array', () => {
    const input = [...testPlayerList].slice(0, 1);

    const result = movePlayerDown(input, 1);

    expect(result).toEqual(input);
  });

  it('given input with one element it returns copy of input array', () => {
    const input = [...testPlayerList].slice(0, 1);

    const result = movePlayerDown(input, 0);

    expect(result).toEqual(input);
  });

  it('given input with more than one element it returns array with selected index element moved to next position in array', () => {
    const input = [...testPlayerList];

    let result = movePlayerDown(input, 0);
    result = movePlayerDown(result, 1);

    expect(result.length).toBe(3);
    expect(result[0]).toEqual(input[1]);
    expect(result[1]).toEqual(input[2]);
    expect(result[2]).toEqual(input[0]);
  });

  it('moving the last element in array returns copy of input array', () => {
    const input = [...testPlayerList];

    const result = movePlayerDown(input, 2);

    expect(result).toEqual(input);
  });
});

describe('the movePlayerUp method', () => {
  it('given input with index out of bounds it return copy of input array', () => {
    const input = [...testPlayerList].slice(0, 1);

    const result = movePlayerUp(input, 2);

    expect(result).toEqual(input);
  });

  it('given input with one element it returns copy of input array', () => {
    const input = [...testPlayerList].slice(0, 1);

    const result = movePlayerUp(input, 0);

    expect(result).toEqual(input);
  });

  it('given input with more than one element it returns array with selected index element moved to previous position in array', () => {
    const input = [...testPlayerList];

    let result = movePlayerUp(input, 2);
    result = movePlayerUp(result, 1);

    expect(result.length).toBe(3);
    expect(result[0]).toEqual(input[2]);
    expect(result[1]).toEqual(input[0]);
    expect(result[2]).toEqual(input[1]);
  });

  it('moving the first element in array returns copy of input array', () => {
    const input = [...testPlayerList];

    const result = movePlayerUp(input, 0);

    expect(result).toEqual(input);
  });
});

describe('the sortPlayer method', () => {
  it('returns 0 if players have same initiative', () => {
    const result = sortPlayer(testPlayerList[1], testPlayerList[2]);

    expect(result).toBe(0);
  });

  it('returns less than 0 if player 1 has larger initiative than player 2', () => {
    const result = sortPlayer(testPlayerList[1], testPlayerList[0]);

    expect(result).toBeLessThan(0);
  });

  it('returns greater than 0 if player 1 has smaller initiative than player 2', () => {
    const result = sortPlayer(testPlayerList[0], testPlayerList[1]);

    expect(result).toBeGreaterThan(0);
  });

  it('sorts players with no initiative as having initiative 0', () => {
    const result = sortPlayer(
      { canMove: false, id: '1', name: '1', initiative: '' },
      { canMove: false, id: '2', name: '2', initiative: '0' }
    );

    expect(result).toBe(0);
  });
});
