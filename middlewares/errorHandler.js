const notFound = (req, res, next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);

};
const errorHandler = (err, req, res, next) => {
    const statuscode = req.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    req.json({
        message: err?.message,
        stack: err?.stack, 
    });
};
module.exports = { errorHandler, notFound };