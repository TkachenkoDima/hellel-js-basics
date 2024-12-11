const api = require('./BaseController');

const login = async (username, password) => {
  return api.post('/Account/v1/Login', { userName: username, password });
};

module.exports = { login };
