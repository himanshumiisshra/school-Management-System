const express = require("express")
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");
const { createYearGroup, getAllYearGroup, getSingleYearGroup, updateYearGroup, deleteYearGroup } = require("../../controller/academics/classYear")

const yearGroupRouter = express.Router();

yearGroupRouter.route("/").post(isLogin,isAdmin, createYearGroup).get(isLogin, isAdmin,getAllYearGroup)

yearGroupRouter.route("/:id").get(isLogin,isAdmin, getSingleYearGroup).put(isLogin,isAdmin, updateYearGroup).delete(isLogin,isAdmin, deleteYearGroup)

module.exports = yearGroupRouter;