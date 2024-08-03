const express = require('express')
const adminRouter = require("../routes/staff/adminRouter")
const morgan = require('morgan')

const app = express();

//middlewares
app.use(morgan("dev"));

//Route

//admin register
app.use('/api/v1/admins', adminRouter);
app.use('/api/v1/admin', adminRouter);

module.exports = app;