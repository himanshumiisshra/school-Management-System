const Admin = require("../../model/staff/Admin");
const AsyncHandler = require('express-async-handler')
const generateToken = require("../../utils/generateToken")
const verifyToken = require("../../utils/verifyToken")

// register admin
exports.registerAdminController = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const adminFound = await Admin.findOne({ email })
    if (adminFound) {
        throw new Error("Admin Exists")
    } else {
        const user = await Admin.create({
            name,
            email,
            password,
        });
        res.status(201).json({
            status: 'Success',
            data: user,
            message: "Admin registered successfully"
        });
    }

});

exports.loginAdminController = AsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await Admin.findOne({ email });
    if (!user) {
        return res.json({ message: "Invalid credentials!" })
    }

    if (user && await user.verifyPassword(password)) {
        // //save user data to req Object
        // req.userAuth = user;
        const token = generateToken(user._id)
        // if(token){
        const verify = verifyToken(token)
        console.log("VERIFY-HM", verify)
        // }
        return res.json({
            data: generateToken(user._id),
            message: "Admin logged in successfully"

        });

    } else {
        return res.json({ message: "Invalid credentials!" })
    }

    res.json({
        status: 'failed',
        error: error.message,
    })
})

exports.getAllAdmins = AsyncHandler(async (req, res) => {
    const admins = await Admin.find()
    res.status(200).json({
        status: 'Success',
        message: 'All admins fetched successfully',
        data: admins
    })
})

exports.getSingleAdmin = AsyncHandler(async (req, res) => {
    console.log(req.userAuth)
    const admin = await Admin.findById(req.userAuth._id).select('-password -createdAt -updatedAt')
    // console.log("admin",admin)
    if (!admin) {
        throw new Error('Admin not found')
    } else {
        res.status(200).json({
            status: 'success',
            data: admin,
            message: "Admin profile fetched successfully"
        })
    }
})

exports.updateAdmin = AsyncHandler(async (req, res) => {
    const { email, name, password } = req.body;
    //find the admin
    const adminFound = await Admin.findById(req.userAuth._id);
    const emailExist = await Admin.findOne({ email })
    if (emailExist) {
        throw new Error('This email is taken/exist')
    } else {
        const admin = await Admin.findByIdAndUpdate(req.userAuth._id, { email, password, name }, { new: true, runValidators: true });
        res.status(200).json({
            success: 'success',
            data: admin,
            message: 'admin updated successfully'
        })
    }

}
)
exports.deleteAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'delete admin'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.suspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin suspend teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unsuspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unsuspend teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.withdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin withdraw teacherr'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unwithdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unwithdraw teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.publishingExam = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin publish exam'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unpublishTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unpublish exam'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

