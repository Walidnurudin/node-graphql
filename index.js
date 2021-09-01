const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/node-graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});