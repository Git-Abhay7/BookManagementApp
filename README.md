# Book API Documentation

This is the documentation for the Book Management API. It provides a set of endpoints to manage books. The API is built using Node.js and Express.

## API Endpoints

### Add a New Book

**Route:** `POST /addBook`

**Description:** Add a new book to the database.

**Request Body:**
- `title` (string): The title of the book.
- `author` (string): The author of the book.
- `summary` (string): A summary of the book.

**Response:**
- Status: `201 Created`
- JSON object containing the newly added book.

### Get Book by ID

**Route:** `GET /getBook/:bookId`

**Description:** Retrieve details of a specific book by its ID.

**URL Parameters:**
- `bookId` (string): The ID of the book to retrieve.

**Response:**
- Status: `200 OK` if the book is found.
- Status: `404 Not Found` if the book with the specified ID does not exist.
- JSON object containing book details.

### List All Books

**Route:** `GET /listAllBooks`

**Description:** Retrieve a list of all books in the database.

**Response:**
- Status: `200 OK`
- JSON array containing all books.

### Update Book

**Route:** `POST /updateBook`

**Description:** Update the details of a book by its ID.

**Request Body:**
- `bookId` (string): The ID of the book to update.
- `title` (string): The updated title of the book.
- `author` (string): The updated author of the book.
- `summary` (string): The updated summary of the book.

**Response:**
- Status: `200 OK` if the book is updated.
- Status: `404 Not Found` if the book with the specified ID does not exist.
- JSON object containing the updated book details.

### Delete Book

**Route:** `GET /deleteBook/:bookId`

**Description:** Delete a book by its ID.

**URL Parameters:**
- `bookId` (string): The ID of the book to delete.

**Response:**
- Status: `200 No Content` if the book is successfully deleted.
- Status: `404 Not Found` if the book with the specified ID does not exist.

## Local Setup

To set up and run the application locally, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies using the following command: `npm install`

3. Start the server: `npm start`

4. The API will be accessible at `http://localhost:2023` || `http://localhost:2023/api/v1/book`.

5. You can make HTTP requests to the defined API endpoints using your preferred API client or tools like Postman.



## Production deployed app url 

- deployed site -  `Render`

- url - https://book-management-app-k5zs.onrender.com/