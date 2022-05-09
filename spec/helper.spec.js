const helper = require('../src/helper');

describe('Given Helper is started', () => {
  describe('When method sum is called', () => {
    it('Then addition operation is performed', () => {
      expect(helper.sum(1, 2)).toEqual(3);
    });
  });

  describe('When method randomAbove3 is called', () => {
    it('Then it will return a random number above three', () => {
      expect(helper.randomAbove3()).toBeGreaterThan(3);
    });

    it('Then will never return a number less three', () => {
      expect(helper.randomAbove3()).not.toBeLessThan(3);
    });
  });

  describe('When method returnTrue is called', () => {
    it('Then it will return true', () => {
      expect(helper.returnTrue()).toBeTruthy();
    });
  });

  describe('When method returnFalse is called', () => {
    it('Then it will return false', () => {
      expect(helper.returnFalse()).toBeFalsy();
    });
  });

  describe('When method returnUndefined is called', () => {
    it('Then it will return undefined', () => {
      expect(helper.returnUndefined()).toBeUndefined();
    });
  });

  describe('When method builder is called', () => {
    it('Then it will return an object', () => {
      expect(helper.builder()).toStrictEqual({
        name: 'Joao',
        surname: 'Silva',
        birth: '01-01-1980',
      });
    });
  });

  describe('When method merger is called', () => {
    it('Then it will return an object merged', () => {
      expect(helper.merger({ xpto: 'xpto' })).toMatchObject({
        name: 'Joao',
        surname: 'Silva',
        birth: '01-01-1980',
        xpto: 'xpto',
      });
    });
  });

  describe('When method concatRandomString is called', () => {
    it('Then it will random concat string', () => {
      expect(helper.concatRandomString('xpto')).toMatch(/^xpto\d+/);
    });
  });

  describe('When method concatRandomArray is called', () => {
    it('Then it will return random concat array', () => {
      expect(helper.concatRandomArray(['xpto'])).toContainEqual('xpto');
    });
  });

  describe('When method thrower is called', () => {
    it('Then it will return an empty error', () => {
      expect(() => helper.thrower() ).toThrow(new Error());
    });
  });

  describe('When method thrower2 is called', () => {
    it('Then it will return an especific error', () => {
      expect(() => helper.thrower2('Error')).toThrowError(/^Error$/);
    });
  });
});