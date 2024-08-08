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

module.exports = globaErrorHandler;