const { default: mongoose, sanitizeFilter } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect("mongodb://localhost:27017/mydatabase");
        console.log("Database connected succesefully");
    } catch (error) {
        console.log("Database error");
    }

};
module.exports= dbConnect;