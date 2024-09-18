const express = require("express");
const { adminRegisterTeacher, loginTeacher, getAllTeacher, getSingleTeacher, getTeacherProfile } = require("../../controller/staff/teachersController")
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin")
const teacherRouter = express.Router();
const isTacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin")

teacherRouter.post("/admin/register", isLogin, isAdmin, adminRegisterTeacher);


teacherRouter.post("/login", loginTeacher)

teacherRouter.get("/admin", isLogin, isAdmin, getAllTeacher)

teacherRouter.get("/:teacherID", isLogin, isAdmin, getSingleTeacher)

teacherRouter.get("/profile", isTeacherLogin, isTacher, getTeacherProfile)

module.exports = teacherRouter;