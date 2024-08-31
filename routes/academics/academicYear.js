const express = require("express");
const { createAcademicYear, getAllAcademicYear, getSingleAcademicYear, updateAcademicYear, deleteAcademicYear } = require("../../controller/academics/academicYear");
const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const academicYearRouter = express.Router();

// academicYearRouter.post("/",isLogin,isAdmin, createAcademicYear)

// academicYearRouter.get("/", isLogin,isAdmin,getAllAcademicYear)

academicYearRouter.route("/").post(isLogin,isAdmin,createAcademicYear).get(isLogin,isAdmin,getAllAcademicYear);

academicYearRouter.route("/:id").get(isLogin,isAdmin, getSingleAcademicYear).put(isLogin, isAdmin,updateAcademicYear).delete(isLogin, isAdmin,deleteAcademicYear)

// academicYearRouter.get("/:id",isLogin,isAdmin, getSingleAcademicYear)

// academicYearRouter.put("/:id", isLogin, isAdmin,updateAcademicYear )

// academicYearRouter.delete("/:id", isLogin, isAdmin,deleteAcademicYear )

module.exports = academicYearRouter;