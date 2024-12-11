const { getBooks, getBookByISBN } = require('../controllers/BooksController.js');
const { login } = require('../controllers/userController.js');

describe('Bookstore API Tests', () => {
  let token;
  let userId;

  beforeAll(async () => {
    const username = 'kekololoev';
    const password = 'Test1234!'; 
    const response = await login(username, password);
    token = response.data.token;
    userId = response.data.userId;
  });

  test('Get all books', async () => {
    const response = await getBooks();
    expect(response.status).toBe(200);
    expect(response.data.books).toBeInstanceOf(Array);
  });

  test('Get book by ISBN', async () => {
    const isbn = '9781449325862'; 
    const response = await getBookByISBN(isbn);
    expect(response.status).toBe(200);
    expect(response.data.isbn).toBe(isbn);
  });

  test('Get book by wrong ISBN', async () => {
    const isbn = '0000000000000';
    try {
      await getBookByISBN(isbn);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test('Get token', () => {
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
    console.log('token:', token);
  });

  test('Get userId', () => {
    expect(userId).toBeDefined();
    expect(typeof userId).toBe('string');
    console.log('userId:', userId);
  });
});
