const possibleSettings = {
  theme: ['light', 'gray', 'dark'],
  music: ['pop', 'rock', 'trance', 'chillout', 'off'],
  difficulty: ['easy', 'normal', 'hard', 'nightmare'],
};
// eslint-disable-next-line import/prefer-default-export
export class Settings {
  constructor() {
    this.default = new Map();
    this.userSettings = new Map();
    this.default.set('theme', 'dark');
    this.default.set('music', 'trance');
    this.default.set('difficulty', 'easy');
    this.userSettings = new Map(this.default);
  }

  userSetup(settingName, value) {
    // eslint-disable-next-line no-use-before-define,no-prototype-builtins
    if (possibleSettings.hasOwnProperty(settingName)) {
      if (!possibleSettings[settingName].includes(value)) {
        throw new Error('У настройки нет такого значения');
      }
      this.userSettings.set(settingName, value);
    } else {
      throw new Error('Попытка изменить несуществующую настройку');
    }
  }

  get settings() {
    return this.userSettings;
  }
}
