const isLogin = (req,res,next) => {
    console.log("CHECKIN$$$$$$$$$$$$$",req.userAuth)
    const isLogin = req.userAuth
    if(isLogin){
        next()
    }else{
        const err = new Error('Your are not Logged In')
        next(err);
    }
};

module.exports = isLogin;