const BookModel = require("./models/book");

module.exports = {
    Query: {
        getAllBooks: async () => await BookModel.find({})
    }
}