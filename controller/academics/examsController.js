const Exam = require("../../model/academics/Exam");
const Teacher = require("../../model/staff/Teacher")
const AsyncHandler = require("express-async-handler")

exports.createExam = AsyncHandler(async (req, res) => {
    const {
        name,
        description,
        subject,
        program,
        academicTerm,
        duration,
        examDate,
        examTime,
        examType,
        academicYear
    } = req.body

    const teacherFound = await Teacher.findById(req.userAuth?.id)
    if(!teacherFound){
        throw new Error("Teacher not found")
    }
    const examExists = await Exam.findOne({name})

    if(examExists){
        throw new Error("Exam already exists")
    }

    const examCreated = await new Exam({
        name,description,subject,program,academicTerm,duration,examDate,examTime,examType,academicYear
        
    });
    teacherFound.examsCreated.push(examCreated._id)
    await examCreated.save();
    await teacherFound.save();

    res.status(200).json({
        status: "Success",
        message: 'exam created Successfully',
        data: examCreated
    })
});

exports.getAllExams = AsyncHandler(async (req,res) => {
    const exam =await Exam.find({})
    if(exam){
        res.status(200).json({
            status: "Success",
            message: "All Exams Fetched Successfully",
            data: exam
        })
    }
});

exports.getSingleExam = AsyncHandler(async (req,res) => {
    const ID = req.params.id
    console.log(ID)
    const exam = await Exam.findById(ID)
    if(exam){
        res.status(200).json({
            status: "Success",
            message: "Single exam Fetched Successfully",
            data: exam
        })
    }
});

exports.updateExam = AsyncHandler(async (req,res) => {
    const {name,
        description,
        subject,
        program,
        academicTerm,
        duration,
        examDate,
        examTime,
        examType,
        academicYear} = req.body
    const ID = req.params.id

    const exam = await Exam.findByIdAndUpdate(ID, {
        name,
        description,
        subject,
        program,
        academicTerm,
        duration,
        examDate,
        examTime,
        examType,
        academicYear}
    )
    if(exam){
        res.status(200).json({
            status: "Success",
            message: "Exam Updated Successfully",
            data: exam
        })
    }
})