const Admin = require("../model/staff/Admin");

const isAdmin   = async (req,res,next) => {
        //find the user
         console.log("checking",req.useAuth)
        const userID = req?.userAuth?._id
        const adminFound = await Admin.findById((userID));
        if(adminFound?.role === 'admin'){
            next()

        }else {
            next (new Error('Access Denied, ADMIN only'))
        }
}
module.exports = isAdmin;