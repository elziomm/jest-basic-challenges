const isDuck = require('../src/duckClassifier');

describe('Given Duck Classifier is started', () => {
  describe('And is Duck', () => {
    it('Then he can fly, walk and swim', () => {
      expect(isDuck(fly = true, walk = true, swim = true)).toBeTruthy();
    });
  });

  describe('And dont\'s Duck', () => {
    it('Then he can\'t fly', () => {
      expect(isDuck(fly = false, walk = true, swim = true)).toBeFalsy();
    });

    it('Then he can\'t walk', () => {
      expect(isDuck(fly = true, walk = false, swim = true)).toBeFalsy();
    });

    it('Then he can\'t swim', () => {
      expect(isDuck(fly = true, walk = true, swim = false)).toBeFalsy();
    });
  });
});