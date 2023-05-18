const { default: mongoose, sanitizeFilter } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected succesefully");
    } catch (error) {
        console.log("DAtabase error");
    }

};
module.exports= dbConnect;