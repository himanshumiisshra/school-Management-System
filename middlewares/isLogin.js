const verifyToken = require("../utils/verifyToken");
const Admin = require("../model/staff/Admin")

const isLogin = async (req, res, next) => {

    // console.log("CHECKIN$$$$$$$$$$$$$",req.userAuth)
    // const isLogin = req.userAuth
    // if(isLogin){
    //     next()
    // }else{
    //     const err = new Error('Your are not Logged In')
    //     next(err);
    // }
    // get token from header
    const headerObf = req.headers;
    const token = headerObf.authorization.split(" ")[1];
    console.log("token", token)
    // verify the token
    const verifiedToken = verifyToken(token)
    console.log(verifiedToken)
    //save the user into request Objects
    if (verifiedToken) {
        const user = await Admin.findById(verifiedToken.id).select("name email role")
        req.userAuth = user;
        next();
    } else {
        const err = new Error('Token expired or Invalid')
        next(err);
    }
};

module.exports = isLogin;