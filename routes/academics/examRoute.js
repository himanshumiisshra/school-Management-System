const express = require("express")
const isTeacher = require("../../middlewares/isTeacher")
const isTeacherLogin = require("../../middlewares/isTeacherLogin")
const examRouter = express.Router()
const {createExam, getAllExams, getSingleExam, updateExam} = require("../../controller/academics/examsController")



examRouter.route("/",isTeacherLogin, isTeacher,).post( createExam).get( getAllExams)

examRouter.route("/:id", isTeacherLogin, isTeacher).get(getSingleExam).post(updateExam)




module.exports = examRouter;