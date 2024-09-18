const verifyToken = require("../utils/verifyToken")
const Teacher = require("../model/staff/Teacher");

const isTeacherLogin = async (req,res, next) => {
    const headerObj = req.headers;
    console.log("isTacher ", headerObj)
    const token = headerObj?.authorization?.split(" ")[1];

    const verifyTok = verifyToken(token)
    if(verifyTok){
        console.log("token verified Succesfully",verifyTok)
        const user  = await Teacher.findById(verifyTok.id).select(
            "name email role"
        );
        console.log("encoded DATA",user)
        req.userAuth = user;
        next();

    }else {
        const err = new Error("Token Expired")
        next(err)
    }
};

module.exports = isTeacherLogin;