const router = require('express').Router();
const BookController = require('../controller/bookController')

router.post("/addBook", (...args) => BookController.addNewBook(...args));
router.get("/getBook/:bookId", (...args) => BookController.getBookById(...args));
router.get("/listAllBooks", (...args) => BookController.getAllBooks(...args));
router.post("/updateBook", (...args) => BookController.updateBook(...args));
router.get("/deleteBook/:bookId", (...args) => BookController.deleteBook(...args));


module.exports = router;  