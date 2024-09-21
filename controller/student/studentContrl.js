const AsyncHandler = require("express-async-handler");
const Student = require("../../model/academics/Student")
const { isPasswordMatched, hashedPassword } = require("../../utils/helpers")
const generateToken = require("../../utils/generateToken")

exports.adminRegisterStudent = AsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const student = await Student.findOne({ email })

    if (student) {
        throw new Error("Student already exists")
    }

    const hashedPass = await hashedPassword(password)

    const studentCreated = await Student.create({
        name, email, password: hashedPass
    })

    res.status(201).json({
        status: "Success",
        message: "Student created Successfullly",
        data: studentCreated
    })
});

exports.loginStudent = AsyncHandler(async (req,res) => {
    console.log("checking")
    const {email, password} = req.body;

    console.log("BODY", req.body)

    const stud = await Student.findOne({email});

    if(!stud){
        return res.json({message: "Invalid Login Credentials"})
    }

    const isMatched = await isPasswordMatched(password, stud?.password)

    if(!isMatched) {
        return res.json({message: "Invalid Credentials"})
    }else {
        console.log("checking student login DATAS", stud)
        res.status(200).json({
            status: "Success",
            message: "Student Loogged In Successfully",
            data: generateToken(stud?._id)
        })
    }
});

exports.getStudentProfile = AsyncHandler(async(req,res) => {
    const student = await Student.findById(req.userAuth._id).select('-password -createdAt -updateAt')

    if(!student){
        throw new Error("student not found")
    }else {
        res.status(200).json({
            status: "Success",
            message: "Student Profile Fetched Successfully",
            data: student
        })
    }
});

exports.getAllStudent = AsyncHandler(async (req,res) => {
    const student = await Student.find()
    res.status(200).json({
        status: "Success",
        message: "All Student Fetched Successfully",
        data: student
    })
});

exports.getSingleStudent = AsyncHandler(async (req,res) => {
    const StudentID = req.params.id

    const student = await Student.findById(StudentID)

    if(student){
        res.status(200).json({
            status: "Success",
            message: "Single Studend fetched Successfully",
            data: student
        })
    }else {
        throw new Error("cannot found Student with provided ID")
    }
});

exports.updateStudent = AsyncHandler(async(req,res) => {
    const studID = req.params.id

    const {name,password, email} = req.body;

    const student = await Student.findByIdAndUpdate(studID,{
        name, email, password
    },{new: true})

    if(student){
        res.status(200).json({
            status: 'Success',
            message: "student Updated Successfully",
            data: student
        })
    }else {
        throw new Error("connot Update")
    }


});

