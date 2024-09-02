const express = require("express")
const {createPrograms, getAllPrograms, getSinglePrograms, updatePrograms, deleteProgram} = require("../../controller/academics/programs")
const isAdmin = require("../../middlewares/isAdmin")
const isLogin = require("../../middlewares/isLogin")

const programRouter = express.Router();

programRouter.route("/").post(isLogin,isAdmin, createPrograms).get(isLogin, isAdmin, getAllPrograms)

programRouter.route("/:id").get(isLogin, isAdmin, getSinglePrograms).put(isLogin,isAdmin, updatePrograms).delete(isLogin, isAdmin, deleteProgram)



module.exports = programRouter;