const api = require('./BaseController');

const getBooks = async () => {
  return api.get('/BookStore/v1/Books');
};

const getBookByISBN = async (isbn) => {
  return api.get('/BookStore/v1/Book', { params: { ISBN: isbn } });
};

module.exports = { getBooks, getBookByISBN };
