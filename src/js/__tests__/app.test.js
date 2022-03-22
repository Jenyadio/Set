import Team from '../app';
import Character from '../character';

test('should add characters', () => {
  const team = new Team();
  const chara1 = new Character('Oleg', 'Daemon');
  const chara2 = new Character('Stas', 'Magician');

  team.addAll(chara1, chara2, chara1);

  expect(team.members.size).toBe(2);
});

test('should not add character', () => {
  const team = new Team();
  const chara1 = new Character('Oleg', 'Daemon');

  team.add(chara1);

  expect(() => team.add(chara1)).toThrow('Character has already been added');
});

test('should make an arr', () => {
  const team = new Team();
  const chara1 = new Character('Oleg', 'Daemon');
  const chara2 = new Character('Stas', 'Magician');

  team.addAll(chara1, chara2);
  team.toArray();

  expect(team.members).toEqual(new Set([{ name: 'Oleg', type: 'Daemon' }, { name: 'Stas', type: 'Magician' }]));
});
