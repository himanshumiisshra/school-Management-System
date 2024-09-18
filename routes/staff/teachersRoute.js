const express = require("express");
const { adminRegisterTeacher, loginTeacher, getAllTeacher, getSingleTeacher, getTeacherProfile, updateTeacher, adminUpdateTeacher } = require("../../controller/staff/teachersController")
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin")
const teacherRouter = express.Router();
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin")

teacherRouter.post("/admin/register", isLogin, isAdmin, adminRegisterTeacher);


teacherRouter.post("/login", loginTeacher)

teacherRouter.get("/admin", isLogin, isAdmin, getAllTeacher)

teacherRouter.get("/profile", isTeacherLogin, isTeacher, getTeacherProfile)

teacherRouter.put("/:teacherID", isLogin,isAdmin,updateTeacher )

teacherRouter.get("/:teacherID", isLogin, isAdmin, getSingleTeacher)

teacherRouter.put("/update/:teacherID", isLogin,isAdmin, adminUpdateTeacher)



module.exports = teacherRouter;