import { Settings } from '../Settings';

test('should throw Error, no such music', () => {
  const settings = new Settings();
  const result = function () {
    settings.userSetup('music', 'metal');
  };

  expect(result).toThrow();
});

test('should throw Error, no such setting', () => {
  const settings = new Settings();
  const result = function () {
    settings.userSetup('volume', 'low');
  };

  expect(result).toThrow();
});

test('should work correct', () => {
  const settings = new Settings();
  settings.userSetup('music', 'pop');
  settings.userSetup('theme', 'gray');
  const result = [settings.default, settings.settings];

  expect(result).toEqual([new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]), new Map([['theme', 'gray'], ['music', 'pop'], ['difficulty', 'easy']])]);
});
