const possibleSettings = {
  theme: ['light', 'gray', 'dark'],
  music: ['pop', 'rock', 'trance', 'chillout', 'off'],
  difficulty: ['easy', 'normal', 'hard', 'nightmare'],
};
// eslint-disable-next-line import/prefer-default-export
export class Settings {
  constructor(...rest) {
    this.default = new Map();
    this.userSettings = new Map();
    this.default.set('theme', 'dark');
    this.default.set('music', 'trance');
    this.default.set('difficulty', 'easy');
    this.userSettings = new Map(this.default);
    rest.forEach((item) => {
      for (const prop in item) {
        // eslint-disable-next-line no-prototype-builtins
        if (possibleSettings.hasOwnProperty(prop)) {
          if (!possibleSettings[prop].includes(item[prop])) {
            throw new Error('У настройки нет такого значения');
          }
          this.userSettings.set(prop, item[prop]);
        } else {
          throw new Error('Попытка изменить несуществующую настройку');
        }
      }
    });
  }


  get settings() {
    return this.userSettings;
  }
}
