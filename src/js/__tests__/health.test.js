import sortedHealth from '../health';

test('toEqual', () => {
  const heroes = sortedHealth([
    { name: 'bowman', health: 10 },
    { name: 'swordsman', health: 100 },
    { name: 'magician', health: 80 },
  ]);
  const result = [
    { name: 'swordsman', health: 100 },
    { name: 'magician', health: 80 },
    { name: 'bowman', health: 10 },
  ];
  expect(heroes).toEqual(result);
});

test('not.toBe', () => {
  const heroes = sortedHealth([
    { name: 'bowman', health: 10 },
    { name: 'swordsman', health: 100 },
    { name: 'magician', health: 80 },
  ]);
  const result = [
    { name: 'Bowman', health: 100 },
    { name: 'swordsman', health: 80 },
    { name: 'magician', health: 10 },
  ];
  expect(heroes).not.toBe(result);
});
