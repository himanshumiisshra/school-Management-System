const globaErrorHandler = (err, req, res, next) => {
    //status of message
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "Failed";
    const statusCode = err.statusCode ? err.statusCode : 500;
    res.status(statusCode).json({
        status,
        message,
        stack,
    });
}

//not found

const notFound = (req,res,next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server`)
    next(err);
}

module.exports = {globaErrorHandler,notFound};