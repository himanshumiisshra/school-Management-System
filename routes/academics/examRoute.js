const express = require("express")
const isTeacher = require("../../middlewares/isTeacher")
const isTeacherLogin = require("../../middlewares/isTeacherLogin")
const examRouter = express.Router()
const {createExam} = require("../../controller/academics/examsController")



examRouter.route("/").post(isTeacherLogin, isTeacher, createExam)



module.exports = examRouter;