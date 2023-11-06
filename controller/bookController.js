const bookModel = require('../model/bookModel')

class BookController {

    async addNewBook(request, response) {
        try {
            const { title, author, summary } = request.body;
            if (!title || !author || !summary) return response.status(400).send({ code: 400, message: 'Missing required fields' });

            const bookData = {
                title,
                author,
                summary
            };
            const existingBook = await bookModel.findOne({ title });
            if (existingBook) return response.status(400).send({ code: 400, message: 'A book with the same title already exists' });

            const savedData = await new bookModel(bookData).save();
            if (savedData) return response.status(201).send({ code: 201, message: 'New Book Added Successfully.', book: savedData });
            else return response.status(500).send({ code: 500, message: 'Failed to add new book' });

        } catch (error) {
            return response.status(500).send({ code: 500, message: 'Internal Server Error', error: error.message });
        }
    }

    async updateBook(request, response) {
        try {
            const { title, author, summary, bookId } = request.body;
            if (!title || !author || !summary || !bookId) return response.status(400).send({ code: 400, message: 'Missing required fields' });

            const findBook = await bookModel.findOne({ _id: bookId });
            if (findBook === null) return response.status(404).send({ code: 404, message: 'No book found.' });
            else {
                const existingBook = await bookModel.findOne({ title });
                if (existingBook) {
                    return response.status(400).send({ code: 400, message: 'A book with the same title already exists' });
                }
                const updateBook = await bookModel.updateOne({ _id: bookId }, {
                    $set: {
                        title: title,
                        author: author,
                        summary: summary
                    }
                });
                if (updateBook.modifiedCount > 0) return response.status(200).send({ code: 200, message: 'Book updated Successfully.' });
                else return response.status(500).send({ code: 500, message: 'Failed to update book' });
            }
        } catch (error) {
            return response.status(500).send({ code: 500, message: 'Internal Server Error', error: error.message });
        }
    }

    async getBookById(request, response) {
        try {
            const { bookId } = request.params;
            if (!bookId) return response.status(400).send({ code: 400, message: 'Missing required fields' });
            const findBook = await bookModel.findOne({ _id: bookId });
            if (findBook === null) return response.status(404).send({ code: 404, message: 'No book found.' });
            else return response.status(200).send({ code: 200, message: 'Book found Successfully.', Book: findBook });
        } catch (error) {
            return response.status(500).send({ code: 500, message: 'Internal Server Error', error: error.message });
        }
    }

    async getAllBooks(request, response) {
        try {
            const findBooks = await bookModel.find();
            if (findBooks.length === 0) return response.status(404).send({ code: 404, message: 'No books found.' });
            else return response.status(200).send({ code: 200, message: 'Books list found Successfully.', BooksList: findBooks });
        } catch (error) {
            return response.status(500).send({ code: 500, message: 'Internal Server Error', error: error.message });
        }
    }

    async deleteBook(request, response) {
        try {
            const { bookId } = request.params;
            if (!bookId) return response.status(400).send({ code: 400, message: 'Missing required fields' });
            const findBook = await bookModel.findOne({ _id: bookId });
            if (findBook === null) return response.status(404).send({ code: 404, message: 'No book found' });

            const deleteBook = await bookModel.deleteOne({ _id: bookId })
            if (deleteBook.deletedCount > 0) return response.status(200).send({ code: 200, message: 'Book deleted Successfully.' });
            else return response.status(500).send({ code: 500, message: 'Failed to delete book' });

        } catch (error) {
            return response.status(500).send({ code: 500, message: 'Internal Server Error', error: error.message });
        }
    }

}

module.exports = new BookController()