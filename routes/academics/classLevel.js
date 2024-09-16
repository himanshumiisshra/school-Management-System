const express = require("express")
const isAdmin = require("../../middlewares/isAdmin")
const isLogin = require("../../middlewares/isLogin")
const { createClassLevel, getAllClassLevel, getSingleClassLevel, updateClassLevel, deleteClassLevel } = require("../../controller/academics/classLevel");

const classLevelRouter = express.Router();

classLevelRouter.route("/").post(isLogin, isAdmin, createClassLevel).get(isLogin, isAdmin, getAllClassLevel)

classLevelRouter.route("/:id").get(isLogin, isAdmin, getSingleClassLevel).put(isLogin, isAdmin, updateClassLevel).delete(isLogin, isAdmin, deleteClassLevel)

module.exports = classLevelRouter;