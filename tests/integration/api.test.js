const nock = require('nock');
const { login, searchColors } = require('../../api/apiClient');

const API_HOST = 'http://cop4331fivebucks.com';
const API_PATH = '/LAMPAPI';

describe('Login API contract', () => {
  afterEach(() => nock.cleanAll());

  test('failed login returns id=0 with error message', async () => {
    nock(API_HOST)
      .post(`${API_PATH}/Login.php`)
      .reply(200, { id: 0, firstName: '', lastName: '', error: 'No Records Found' });

    const result = await login('baduser', 'badpass');

    expect(result.id).toBe(0);
    expect(result).toHaveProperty('firstName');
    expect(result).toHaveProperty('lastName');
    expect(result).toHaveProperty('error');
  });

  test('successful login returns positive id with user info', async () => {
    nock(API_HOST)
      .post(`${API_PATH}/Login.php`)
      .reply(200, { id: 7, firstName: 'Jane', lastName: 'Doe', error: '' });

    const result = await login('jane', 'password123');

    expect(result.id).toBeGreaterThan(0);
    expect(result.firstName).toBe('Jane');
    expect(result.lastName).toBe('Doe');
    expect(result.error).toBe('');
  });

  test('response JSON is parseable and is an object', async () => {
    nock(API_HOST)
      .post(`${API_PATH}/Login.php`)
      .reply(200, { id: 0, firstName: '', lastName: '', error: 'No Records Found' });

    const result = await login('user', 'pass');

    expect(typeof result).toBe('object');
    expect(result).not.toBeNull();
  });
});

describe('SearchColors API contract', () => {
  afterEach(() => nock.cleanAll());

  test('successful search returns results array', async () => {
    nock(API_HOST)
      .post(`${API_PATH}/SearchColors.php`)
      .reply(200, { results: ['Red', 'Scarlet Red', 'Dark Red'], error: '' });

    const result = await searchColors('red', 1);

    expect(result).toHaveProperty('results');
    expect(Array.isArray(result.results)).toBe(true);
    expect(result.results.length).toBeGreaterThan(0);
    expect(result.error).toBe('');
  });

  test('no-match search returns error response', async () => {
    nock(API_HOST)
      .post(`${API_PATH}/SearchColors.php`)
      .reply(200, { id: 0, firstName: '', lastName: '', error: 'No Records Found' });

    const result = await searchColors('zzz_no_match', 1);

    expect(result).toHaveProperty('error');
    expect(result.error).not.toBe('');
  });
});
