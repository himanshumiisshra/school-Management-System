const express = require('express')
const adminRouter = require("../routes/staff/adminRouter")
const morgan = require('morgan')
const {globaErrorHandler, notFound} = require("../middlewares/globalErrorHandler");
const academicYearRouter = require("../routes/academics/academicYear");
const academicTermRouter = require('../routes/academics/academicTerm');
const classLevelRouter = require("../routes/academics/classLevel")
const program = require("../routes/academics/program");
const subject = require("../routes/academics/subject");
const yearGroup = require("../routes/academics/yearGroup");
const teacherRouter = require("../routes/staff/teachersRoute");
const examRouter = require("../routes/academics/examRoute")
const studentRouter = require("../routes/student/studentRoute")

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json())

//MIDDLEWARE EXPLANATION

// app.use((req, res, next) => {
//     console.log("Middleware:", `${req.method} ${req.originalUrl}`);
//     next();
// });


// let user = {
//     name: "John Jonny",
//     isAdmin: false,
//     isLogin: true,
// };

// const isLoggedIn = (reqe, res, next) => {
//     if (user.isLogin) {
//         next();
//     } else {
//         res.status(401).json({
//             msg: "unauthorized"
//         })
//     }
// };

// const isAdmin = (reqe, res, next) => {
//     if (user.isAdmin) {
//         next();
//     } else {
//         res.status(401).json({
//             msg: "unauthorized you are not admin"
//         })
//     }
// };



// app.use(isLoggedIn);
// app.use(isLoggedIn,isAdmin);

//Route

//admin register
app.use('/api/v1/admins', adminRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/academicYear', academicYearRouter);
app.use('/api/v1/academicTerm', academicTermRouter);
app.use('/api/v1/classLevel', classLevelRouter )
app.use('/api/v1/program', program)
app.use('/api/v1/subject', subject)
app.use('/api/v1/yeargroup', yearGroup)
app.use('/api/v1/teachers', teacherRouter)
app.use('/api/v1/exam', examRouter)
app.use('/api/v1/student', studentRouter)


//Error Middleware
app.use(notFound);
app.use(globaErrorHandler);

module.exports = app;