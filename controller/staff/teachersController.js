const AsyncHandler = require("express-async-handler")
const Teacher = require("../../model/staff/Teacher")
const {  isPasswordMatched, hashedPassword } = require("../../utils/helpers")

exports.adminRegisterTeacher = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const teacher = await Teacher.findOne({ email });

    if (teacher) {
        throw new Error("Teacher already employed")
    }

    const hashedPass = await hashedPassword(password);

    const teacherCreated = await Teacher.create({
        name, email, password: hashedPass
    });

    res.status(201).json({
        status: "Success",
        message: "Teacher created Successfully",
        data: teacherCreated
    })



})