const express = require("express")
const { createSubject, getAllSubjects, getSingleSubject, updateSubject, deleteSubject } = require("../../controller/academics/subject");
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

const subjectRouter = express.Router();

subjectRouter.route("/").post(isLogin,isAdmin, createSubject).get(isLogin,isAdmin, getAllSubjects)

subjectRouter.route("/:id").get(isLogin, isAdmin, getSingleSubject).put(isLogin,isAdmin, updateSubject).delete(isLogin,isAdmin, deleteSubject)

module.exports = subjectRouter;