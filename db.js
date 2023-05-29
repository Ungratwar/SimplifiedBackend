const mongoose = require("mongoose");

// mongodb:/localhost:27017/my_first_database

mongoose.connect("mongodb://127.0.0.1:27017/Project_Simplified_Schooling");

module.exports = mongoose