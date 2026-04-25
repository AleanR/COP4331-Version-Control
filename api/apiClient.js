const fetch = require('node-fetch');

const API_BASE = process.env.API_BASE || 'http://cop4331fivebucks.com/LAMPAPI';

async function login(login, password) {
  const res = await fetch(`${API_BASE}/Login.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ login, password }),
  });
  return res.json();
}

async function searchColors(search, userId) {
  const res = await fetch(`${API_BASE}/SearchColors.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ search, userId }),
  });
  return res.json();
}

async function addColor(color, userId) {
  const res = await fetch(`${API_BASE}/AddColor.php`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ color, userId }),
  });
  return res.json();
}

module.exports = { login, searchColors, addColor };
