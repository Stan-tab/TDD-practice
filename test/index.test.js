const index = require('../src/index.js');

test('Capitalized sentence', () => {
	expect(index.capitalize('hello')).toBe('Hello');
});

test('Reversed string', () => {
	expect(index.reverseString('olleH')).toBe('Hello');
});

test("Caesar's cipher", () => {
	expect(index.caesarCipher('Hello BaBy', 5)).toBe('Mjqqt GfGd');
});

test('Array analyzer', () => {
	expect(index.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
	});
});
