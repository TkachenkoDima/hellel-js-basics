const axios = require('axios');

const api = axios.create({
  baseURL: 'https://bookstore.toolsqa.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = api;
