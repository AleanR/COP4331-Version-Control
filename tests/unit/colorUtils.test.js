const {
  parseCookieString,
  buildLoginPayload,
  buildColorPayload,
  buildSearchPayload,
  isValidColor,
} = require('../../public/js/colorUtils');

describe('parseCookieString', () => {
  test('parses a well-formed cookie string', () => {
    const result = parseCookieString('firstName=Jane,lastName=Doe,userId=7');
    expect(result.firstName).toBe('Jane');
    expect(result.lastName).toBe('Doe');
    expect(result.userId).toBe(7);
  });

  test('returns defaults for empty string', () => {
    const result = parseCookieString('');
    expect(result.userId).toBe(-1);
    expect(result.firstName).toBe('');
    expect(result.lastName).toBe('');
  });

  test('returns defaults for null', () => {
    const result = parseCookieString(null);
    expect(result.userId).toBe(-1);
  });

  test('parses userId as integer', () => {
    const result = parseCookieString('userId=42');
    expect(typeof result.userId).toBe('number');
    expect(result.userId).toBe(42);
  });
});

describe('buildLoginPayload', () => {
  test('produces valid JSON', () => {
    const payload = buildLoginPayload('alice', 'secret');
    expect(() => JSON.parse(payload)).not.toThrow();
  });

  test('includes login and password fields', () => {
    const obj = JSON.parse(buildLoginPayload('alice', 'secret'));
    expect(obj).toHaveProperty('login', 'alice');
    expect(obj).toHaveProperty('password', 'secret');
  });
});

describe('buildColorPayload', () => {
  test('includes color and userId fields', () => {
    const obj = JSON.parse(buildColorPayload('Crimson', 3));
    expect(obj).toHaveProperty('color', 'Crimson');
    expect(obj).toHaveProperty('userId', 3);
  });
});

describe('buildSearchPayload', () => {
  test('includes search and userId fields', () => {
    const obj = JSON.parse(buildSearchPayload('blue', 5));
    expect(obj).toHaveProperty('search', 'blue');
    expect(obj).toHaveProperty('userId', 5);
  });
});

describe('isValidColor', () => {
  test('returns true for a normal color name', () => {
    expect(isValidColor('red')).toBe(true);
    expect(isValidColor('Electric Blue')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(isValidColor('')).toBe(false);
  });

  test('returns false for whitespace-only string', () => {
    expect(isValidColor('   ')).toBe(false);
  });

  test('returns false for non-string types', () => {
    expect(isValidColor(null)).toBe(false);
    expect(isValidColor(undefined)).toBe(false);
    expect(isValidColor(42)).toBe(false);
  });
});
