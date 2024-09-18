const AsyncHandler = require("express-async-handler")
const Teacher = require("../../model/staff/Teacher")
const { isPasswordMatched, hashedPassword } = require("../../utils/helpers")
const generateToken = require("../../utils/generateToken")

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



});

exports.loginTeacher = AsyncHandler(async (req, res) => {
    const { email, password } = req.body

    const teach = await Teacher.findOne({ email });

    if (!teach) {
        return res.json({ message: "Invalid login credentials" })
    }

    const isMatched = await isPasswordMatched(password, teach?.password)
    if (!isMatched) {
        return res.json({ message: "Invalid credentials" })
    } else {
        console.log("checking teacher loh=gin datas", teach)
        res.status(200).json({
            status: "Success",
            message: "Teacher Logged In Succesfullt",
            data: generateToken(teach?._id)
        })
    }
});

exports.getAllTeacher = AsyncHandler(async (req, res) => {
    const teachers = await Teacher.find()
    res.status(200).json({
        status: "Success",
        message: "All Teachers Fetched Successfully",
        data: teachers
    })
});

exports.getSingleTeacher = AsyncHandler(async (req, res) => {
    const TeacherID = req.params.teacherID
    const teacher = await Teacher.findById(TeacherID)
    if (teacher) {
        res.status(200).json({
            status: "Success",
            message: "Teacher Fetched Successfullly",
            data: teacher
        })
    } else {
        throw new Error("Cannot found Teacher provided ID")
    }
});

exports.getTeacherProfile = AsyncHandler(async (req, res) => {
    console.log("tracing")
    const teacher = await Teacher.findById(req.userAuth._id).select('-apssword -createdAt -updatedAt')
    if (!teacher) {
        throw new Error("teacher not found")
    } else {
        res.status(200).json({
            status: "Success",
            message: "Teacher Profile Fteched Successfully",
            data: teacher
        })
    }
});

exports.updateTeacher = AsyncHandler(async (req, res) => {
    const teachID = req.params.teacherID
    const {name, email, password} = req.body
    console.log("checking for ID",teachID)
    const tecaher = await Teacher.findByIdAndUpdate(teachID, {
        name, email, password
    }, { new: true })

    if (tecaher) {
        res.status(200).json({
            status: "Success",
            message: "Updated SuccessFully",
            data: tecaher
        })
    } else {
        throw new Error("cannot upodate")
    }
});

exports.adminUpdateTeacher = AsyncHandler(async (req,res) => {
    const { program, classLevel, academicYear, subject} = req.body

    const teacherFound = await Teacher.findById(req.params.teacherID)

    if(!teacherFound){
        throw new Error("Teacher not Found")
    }

    if(teacherFound.isWitdrawn){
        throw new Error("Action DENIED, teacher is withdrawn")
    }

    if(program){
        teacherFound.program = program;
        await teacherFound.save();

        res.status(200).json({
            status: "Success",
            message: "Updated Successfully",
            data: teacherFound
        })
    }

    if(classLevel){
        teacherFound.classLevel = classLevel;
        await teacherFound.save();

        res.status(200).json({
            status: "Success",
            message: "Updated Successfully",
            data: teacherFound
        })
    }

    if(academicYear){
        teacherFound.academicYear = academicYear;
        await teacherFound.save();

        res.status(200).json({
            status: "Success",
            message: "Updated Successfully",
            data: teacherFound
        })
    }

    if(subject){
        teacherFound.subject = subject;
        await teacherFound.save();

        res.status(200).json({
            status: "Success",
            message: "Updated Successfully",
            data: teacherFound
        })
    }
})