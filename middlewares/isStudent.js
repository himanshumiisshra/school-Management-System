const Student = require("../model/academics/Student")

const isStudent = async(req,res,next) => {
    const userID = req?.userAuth?._id;

    console.log("checking for middleWARE", userID)

    const StudentFound = await Student.findById(userID)
    if(StudentFound?.role === "student"){
        next()
    }else {
        next(new Error("Access Denied only students are allowed"))
    }
};

module.exports = isStudent;