const express = require('express');
const { unpublishTeacher, publishingExam, unwithdrawTeacher, withdrawTeacher, unsuspendTeacher, suspendTeacher, deleteAdmin, registerAdminController, updateAdmin, getSingleAdmin, loginAdminController, getAllAdmins } = require('../../controller/staff/adminController')
const adminRouter = express.Router();
const isLogin = require("../../middlewares/isLogin");
const isAdmin = require("../../middlewares/isAdmin");

//register
adminRouter.post("/register", registerAdminController);

//login
adminRouter.post("/login", loginAdminController);

//get all admins
adminRouter.get("/",isLogin, getAllAdmins);

//get single admin
adminRouter.get("/profile",isLogin, isAdmin,getSingleAdmin);

//update admin
adminRouter.put("/",isLogin,isAdmin, updateAdmin);

//delete admin
adminRouter.delete("/:id", deleteAdmin);

//admin suspending teacher
adminRouter.put("/suspend/teacher/:id", suspendTeacher);

//admin Unsuspending teacher
adminRouter.put("/unsuspend/teacher/:id", unsuspendTeacher);

//admin withdrawing teacher
adminRouter.put("/withdraw/teacher/:id", withdrawTeacher);

//admin unWithdraw teacher
adminRouter.put("/unwithdraw/teacher/:id", unwithdrawTeacher);

//admin publishing exam results
adminRouter.put("/publish/exam/:id", publishingExam)

//admin unpublishing exam results
adminRouter.put("/unpublish/exam/:id", unpublishTeacher)


module.exports = adminRouter;