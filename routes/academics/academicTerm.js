const express = require("express");
const { createAcademicTerm, getAllAcademicTerm, getSingleAcademicTerm, updateAcademicTerm, deleteAcademicTerm } = require("../../controller/academics/academicTerm");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin")

const academicTermRouter = express.Router();

// academicTermRiuter.post("/", isLogin, isAdmin, createAcademicTerm)
// academicTermRiuter.get("/", isLogin, isAdmin,getAllAcademicTerm)
// academicTermRiuter.get("/:id", isLogin, isAdmin, getSingleAcademicTerm )
// academicTermRiuter.put(":/id", isLogin, isAdmin,updateAcademicTerm )
// academicTermRiuter.delete(":/id", isLogin,isAdmin, deleteAcademicTerm)

academicTermRouter.route("/").post(isLogin,isAdmin,createAcademicTerm).get(isLogin,isAdmin,getAllAcademicTerm);
academicTermRouter.route("/:id").get(isLogin,isAdmin, getSingleAcademicTerm).put(isLogin,isAdmin,updateAcademicTerm).delete(isLogin, isAdmin, deleteAcademicTerm)

module.exports = academicTermRouter;