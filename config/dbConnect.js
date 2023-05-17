const { default: mongoose, sanitizeFilter } = require("mongoose");

const dbConnect = () => {
    const conn = mongoose.connect("mongodb")
};