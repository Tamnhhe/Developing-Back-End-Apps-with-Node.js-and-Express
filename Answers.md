# Final Project: Submission and Evaluation - Answers (30 / 30 Points)
## Course: Developing Back-End Apps with Node.js and Express

**Public GitHub Repository:** [https://github.com/Tamnhhe/expressBookReview](https://github.com/Tamnhhe/expressBookReview)

Dưới đây là đầy đủ các lệnh cURL và kết quả trả về (output) tương ứng từng Task để nộp bài:

---

### **Task 1: GitHub Repository Forked (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `githubrepo`, which shows that your GitHub repository is forked from `ibm-developer-skills-network/expressBookReview`.
- **Command & Output (githubrepo):**
```bash
$ curl -s https://api.github.com/repos/Tamnhhe/expressBookReview
{
  "id": 1335631772,
  "node_id": "R_kgDOT5wfnA",
  "name": "expressBookReview",
  "full_name": "Tamnhhe/expressBookReview",
  "private": false,
  "owner": {
    "login": "Tamnhhe",
    "id": 134187047,
    "html_url": "https://github.com/Tamnhhe"
  },
  "html_url": "https://github.com/Tamnhhe/expressBookReview",
  "description": "Online Bookstore Application Backend using Node.js and Express",
  "fork": true,
  "parent": {
    "full_name": "ibm-developer-skills-network/expressBookReview",
    "html_url": "https://github.com/ibm-developer-skills-network/expressBookReview"
  },
  "source": {
    "full_name": "ibm-developer-skills-network/expressBookReview",
    "html_url": "https://github.com/ibm-developer-skills-network/expressBookReview"
  }
}
```

---

### **Task 2: Get All Books (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `getallbooks`, which displays all book(s) retrieved.
- **Command & Output (getallbooks):**
```bash
$ curl http://localhost:5000/
{
    "books": {
        "1": {
            "author": "Chinua Achebe",
            "title": "Things Fall Apart",
            "reviews": {}
        },
        "2": {
            "author": "Hans Christian Andersen",
            "title": "Fairy tales",
            "reviews": {}
        },
        "3": {
            "author": "Dante Alighieri",
            "title": "The Divine Comedy",
            "reviews": {}
        },
        "4": {
            "author": "Unknown",
            "title": "The Epic Of Gilgamesh",
            "reviews": {}
        },
        "5": {
            "author": "Unknown",
            "title": "The Book Of Job",
            "reviews": {}
        },
        "6": {
            "author": "Unknown",
            "title": "One Thousand and One Nights",
            "reviews": {}
        },
        "7": {
            "author": "Unknown",
            "title": "Njál's Saga",
            "reviews": {}
        },
        "8": {
            "author": "Jane Austen",
            "title": "Pride and Prejudice",
            "reviews": {}
        },
        "9": {
            "author": "Honoré de Balzac",
            "title": "Le Père Goriot",
            "reviews": {}
        },
        "10": {
            "author": "Samuel Beckett",
            "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
            "reviews": {}
        }
    }
}
```

---

### **Task 3: Get Books by ISBN (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `getbooksbyISBN`, which displays all book(s) retrieved based on the specified ISBN.
- **Command & Output (getbooksbyISBN):**
```bash
$ curl http://localhost:5000/isbn/1
{
    "author": "Chinua Achebe",
    "title": "Things Fall Apart",
    "reviews": {}
}
```

---

### **Task 4: Get Books by Author (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `getbooksbyauthor`, which displays all books retrieved based on the specified author.
- **Command & Output (getbooksbyauthor):**
```bash
$ curl http://localhost:5000/author/Chinua%20Achebe
{
    "booksbyauthor": [
        {
            "isbn": "1",
            "title": "Things Fall Apart",
            "reviews": {}
        }
    ]
}
```

---

### **Task 5: Get Books by Title (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `getbooksbytitle`, which displays all books retrieved based on the specified title.
- **Command & Output (getbooksbytitle):**
```bash
$ curl http://localhost:5000/title/Things%20Fall%20Apart
{
    "booksbytitle": [
        {
            "isbn": "1",
            "author": "Chinua Achebe",
            "reviews": {}
        }
    ]
}
```

---

### **Task 6: Get Book Review (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `getbookreview`, which displays the initial book review.
- **Command & Output (getbookreview):**
```bash
$ curl http://localhost:5000/review/1
{}
```

---

### **Task 7: Register User (3 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `register`, which displays a message confirming the successful registration of a new user.
- **Command & Output (register):**
```bash
$ curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"john_doe","password":"password123"}'
{
    "message": "Customer successfully registered. Now you can login"
}
```

---

### **Task 8: Login User (3 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `login`, which displays the result of logging in as a registered user.
- **Command & Output (login):**
```bash
$ curl -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username":"john_doe","password":"password123"}' -c cookie.txt
Customer successfully logged in.
```

---

### **Task 9: Add/Modify Book Review (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `reviewadded`, which displays a message and reviews after adding or modifying a book review.
- **Command & Output (reviewadded):**
```bash
$ curl -X PUT "http://localhost:5000/customer/auth/review/1?review=This%20book%20is%20a%20masterpiece" -b cookie.txt
The review for the book with ISBN 1 has been added/updated.
```

---

### **Task 10: Delete Book Review (2 Points)**
- **Question:** Copy and paste the cURL command and its output, saved as `deletereview`, which displays a delete message after deleting a book review.
- **Command & Output (deletereview):**
```bash
$ curl -X DELETE http://localhost:5000/customer/auth/review/1 -b cookie.txt
Reviews for the ISBN 1 posted by the user john_doe deleted.
```

---

### **Task 11: GitHub URL of `general.js` (8 Points)**
- **Question:** Submit the GitHub URL of the general.js file, which contains the code implementation to retrieve all books and their details based on author, title, and ISBN, using promise callbacks or async/await with Axios.
- **Answer (GitHub URL):**
```text
https://github.com/Tamnhhe/expressBookReview/blob/main/router/general.js
```
*(Hoặc URL repository `Developing-Back-End-Apps-with-Node.js-and-Express`):*
```text
https://github.com/Tamnhhe/Developing-Back-End-Apps-with-Node.js-and-Express/blob/main/router/general.js
```
