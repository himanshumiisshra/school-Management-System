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
        createdBy,
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
        name,description,subject,program,academicTerm,duration,examDate,examTime,examType,createdBy,academicYear
        
    });
    teacherFound.examsCreated.push(examCreated._id)
    await examCreated.save();
    await teacherFound.save();

    res.status(200).json({
        status: "Success",
        message: 'exam created Successfully',
        data: examCreated
    })
})