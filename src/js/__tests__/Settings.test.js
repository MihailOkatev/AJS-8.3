import { Settings } from '../Settings';

test('should throw Error, no such music', () => {
  const result = function () {
    // eslint-disable-next-line no-unused-vars
    const a = new Settings({ music: 'ambient' });
  };
  expect(result).toThrow();
});

test('should throw Error, no such setting', () => {
  const result = function () {
    // eslint-disable-next-line no-unused-vars
    const a = new Settings({ volume: 'low' });
  };

  expect(result).toThrow();
});

test('should work correct', () => {
  const settings = new Settings({ music: 'pop' }, { theme: 'gray' });
  const result = [settings.default, settings.settings];

  expect(result).toEqual([new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]), new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'easy']])]);
});
