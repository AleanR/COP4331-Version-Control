// Pure utility functions — exported for Node.js test environment, used directly in browser.

function parseCookieString(cookieStr) {
  const result = { firstName: '', lastName: '', userId: -1 };
  if (!cookieStr) return result;

  const splits = cookieStr.split(',');
  for (let i = 0; i < splits.length; i++) {
    const thisOne = splits[i].trim();
    const tokens = thisOne.split('=');
    if (tokens[0] === 'firstName') result.firstName = tokens[1];
    else if (tokens[0] === 'lastName') result.lastName = tokens[1];
    else if (tokens[0] === 'userId') result.userId = parseInt(tokens[1].trim(), 10);
  }
  return result;
}

function buildLoginPayload(login, password) {
  return JSON.stringify({ login, password });
}

function buildColorPayload(color, userId) {
  return JSON.stringify({ color, userId });
}

function buildSearchPayload(search, userId) {
  return JSON.stringify({ search, userId });
}

function isValidColor(colorName) {
  return typeof colorName === 'string' && colorName.trim().length > 0;
}

if (typeof module !== 'undefined') {
  module.exports = { parseCookieString, buildLoginPayload, buildColorPayload, buildSearchPayload, isValidColor };
}
