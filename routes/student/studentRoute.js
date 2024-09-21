const express = require("express")
const {adminRegisterStudent, loginStudent, getStudentProfile,getAllStudent,getSingleStudent, updateStudent} = require("../../controller/student/studentContrl")
const studentRouter = express.Router();
const isStudent = require("../../middlewares/isStudent")
const isStudentLogin = require("../../middlewares/isStudentLogin");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

studentRouter.post("/admin/register",isLogin,isAdmin, adminRegisterStudent)

studentRouter.post("/login", loginStudent )

studentRouter.get("/profile", isStudentLogin, isStudent,getStudentProfile)

studentRouter.get("/admin", isStudentLogin, isStudent, getAllStudent)

studentRouter.get("/:id", isStudentLogin, isStudent, getSingleStudent)

studentRouter.post("/:id/update",isLogin, isAdmin, updateStudent)


module.exports = studentRouter;