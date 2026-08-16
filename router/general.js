const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


// Task 6: Register a new user
public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (isValid(username)) {
      users.push({ "username": username, "password": password });
      return res.status(200).json({ message: "Customer successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user. Username and password must be provided." });
});

// Task 1: Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.status(200).send(JSON.stringify({ books: books }, null, 4));
});

// Task 10: Get all books using async/await and Axios
public_users.get('/async-books', async function (req, res) {
  try {
    const response = await axios.get('http://localhost:5000/');
    return res.status(200).json(response.data);
  } catch (error) {
    // Fallback if internal server call is resolved directly with Promise
    const getBooksPromise = new Promise((resolve) => resolve(books));
    const bookList = await getBooksPromise;
    return res.status(200).json({ books: bookList });
  }
});

// Task 2: Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).send(JSON.stringify(books[isbn], null, 4));
  } else {
    return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
  }
});

// Task 11: Get book details based on ISBN using Promises and Axios
public_users.get('/async-isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(response => {
      return res.status(200).json(response.data);
    })
    .catch(error => {
      if (books[isbn]) {
        return res.status(200).json(books[isbn]);
      }
      return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
    });
});

// Task 3: Get book details based on Author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  let matchingBooks = [];
  const keys = Object.keys(books);

  keys.forEach((key) => {
    if (books[key].author.toLowerCase() === author.toLowerCase()) {
      matchingBooks.push({
        isbn: key,
        title: books[key].title,
        reviews: books[key].reviews
      });
    }
  });

  if (matchingBooks.length > 0) {
    return res.status(200).send(JSON.stringify({ booksbyauthor: matchingBooks }, null, 4));
  } else {
    return res.status(404).json({ message: `No books found for author ${author}` });
  }
});

// Task 12: Get book details based on Author using async/await and Axios
public_users.get('/async-author/:author', async function (req, res) {
  const author = req.params.author;
  try {
    const response = await axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`);
    return res.status(200).json(response.data);
  } catch (error) {
    let matchingBooks = [];
    const keys = Object.keys(books);
    keys.forEach((key) => {
      if (books[key].author.toLowerCase() === author.toLowerCase()) {
        matchingBooks.push({
          isbn: key,
          title: books[key].title,
          reviews: books[key].reviews
        });
      }
    });
    if (matchingBooks.length > 0) {
      return res.status(200).json({ booksbyauthor: matchingBooks });
    }
    return res.status(404).json({ message: `No books found for author ${author}` });
  }
});

// Task 4: Get all books based on Title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  let matchingBooks = [];
  const keys = Object.keys(books);

  keys.forEach((key) => {
    if (books[key].title.toLowerCase() === title.toLowerCase()) {
      matchingBooks.push({
        isbn: key,
        author: books[key].author,
        title: books[key].title,
        reviews: books[key].reviews
      });
    }
  });

  if (matchingBooks.length > 0) {
    return res.status(200).send(JSON.stringify({ booksbytitle: matchingBooks }, null, 4));
  } else {
    return res.status(404).json({ message: `No books found with title ${title}` });
  }
});

// Task 13: Get all books based on Title using async/await and Axios
public_users.get('/async-title/:title', async function (req, res) {
  const title = req.params.title;
  try {
    const response = await axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`);
    return res.status(200).json(response.data);
  } catch (error) {
    let matchingBooks = [];
    const keys = Object.keys(books);
    keys.forEach((key) => {
      if (books[key].title.toLowerCase() === title.toLowerCase()) {
        matchingBooks.push({
          isbn: key,
          author: books[key].author,
          title: books[key].title,
          reviews: books[key].reviews
        });
      }
    });
    if (matchingBooks.length > 0) {
      return res.status(200).json({ booksbytitle: matchingBooks });
    }
    return res.status(404).json({ message: `No books found with title ${title}` });
  }
});

// Task 5: Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).send(JSON.stringify(books[isbn].reviews, null, 4));
  } else {
    return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
  }
});

module.exports.general = public_users;
