// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('422-123-4321 is a valid phone number', () => {
    expect(functions.isPhoneNumber('442-123-4321')).toBe(true);
  });

test('(442)123-4321 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(442)123-4321')).toBe(true);
});

test('442-123-321 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('442-123-321')).toBe(false);
});

test('231-21-2 is not  a valid phone number', () => {
    expect(functions.isPhoneNumber('231-21-2')).toBe(false);
});

test('Check if ben12@gmail.com email is valid', () => {
    expect(functions.isEmail('ben12@gmail.com')).toBe(true);
});

test('Check if bb2233@gml.tw email is valid', () => {
    expect(functions.isEmail('bb2233@gml.tw')).toBe(true);
});

test('Check if @gmail.com email is valid', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('Check if ben11223 email is valid', () => {
    expect(functions.isEmail('ben11223')).toBe(false);
});

test('ben11223 is a strong password', () => {
    expect(functions.isStrongPassword('ben11223')).toBe(true);
});

test('apd213_23112 is a strong password', () => {
    expect(functions.isStrongPassword('apd213_23112')).toBe(true);
});

test('bb2 is not a strong password', () => {
    expect(functions.isStrongPassword('bb2')).toBe(false);
});

test('pdosk12321asd24312312 is not a strong password', () => {
    expect(functions.isStrongPassword('pdosk12321asd24312312')).toBe(false);
});

test('02 / 07 / 2000 is a valid date', () => {
    expect(functions.isDate('02/07/2000')).toBe(true);
});

test('12 / 30 / 2012 is a valid date', () => {
    expect(functions.isDate('12/30/2012')).toBe(true);
});

test('1 / 7 / 2000 is not a valid date', () => {
    expect(functions.isDate('1/007/2000')).toBe(false);
});

test('1221 / 7 / 20 is not a valid date', () => {
    expect(functions.isDate('1221/7/20')).toBe(false);
});

test('#FFF is a valid hex color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('#000000 is a valid hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('00FF is not a valid hex color', () => {
    expect(functions.isHexColor('00ff')).toBe(false);
});

test('#0000FFFF is not a valid hex color', () => {
    expect(functions.isHexColor('#0000FFFF')).toBe(false);
});