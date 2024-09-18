const Teacher = require("../model/staff/Teacher")

const isTeacher = async(req,res,next) => {
    const usrID = req?.userAuth?._id;
    console.log("checking for middlewares",usrID)
    const TeacherFound = await Teacher.findById(usrID)
    if(TeacherFound?.role === "teacher"){
        next();
    }else {
        next(new Error("Access Denied Only Teachers are allowed"))
    }
};

module.exports = isTeacher;