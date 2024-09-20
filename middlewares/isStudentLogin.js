const verifyToken = require("../utils/verifyToken")
const Student = require("../model/academics/Student");

const isStudentLogin = async(req,res,next) => {
    const headerObj = req.headers;
    console.log("isStudent", headerObj)
    const token = headerObj?.authorization?.split(" ")[1];

    const verifyTok = verifyToken(token)

    if(verifyTok){
        console.log("token verified Successfully", verifyTok)

        const user = await Student.findById(verifyTok.id).select(
            "name email role"
        );
        console.log("encoded DATA", user)
        req.userAuth = user;
        next();
    }else {
        const err = new Error("Token Expired")
        next(err)
    }


}

module.exports = isStudentLogin;