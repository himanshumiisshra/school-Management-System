const AsyncHandler = require("express-async-handler");
const subjects = require("../../model/academics/Subject");
const admin = require("../../model/staff/Admin");
const { findByIdAndUpdate } = require("../../model/academics/ClassLevel");
const program = require("../../model/academics/Program")

exports.createSubject = AsyncHandler(async (req, res) => {
    const { name, description, academicTerm } = req.body;

    const programFound = await program.findById(req.params.programID)
    if (!programFound) {
        throw new Error("Program not found")
    }

    const subjectfound = await subjects.findOne({ name })

    if (subjectfound) {
        throw new Error("Subject already exist")
    }

    const createSubject = await subjects.create({
        name, description, academicTerm, createdBy: req.userAuth
            ._id
    })
    programFound.subjects.push(createSubject._id)

    await programFound.save()


    res.status(201).json({
        status: "Success",
        message: "subject created Successfully",
        data: createSubject
    })

})

exports.getAllSubjects = AsyncHandler(async (req, res) => {
    const subs = await subjects.find({})
    if (subs) {
        res.status(201).json({
            status: "Sucess",
            message: "Fetched All subjects Successfully",
            data: subs
        })
    } else {
        throw new Error("Failed to fetch all subjects")
    }
})


exports.getSingleSubject = AsyncHandler(async (req, res) => {
    const singleSubject = await subjects.findById(req.params.id)

    if (singleSubject) {
        res.status(201).json({
            status: "Success",
            message: "Single Subject Fetched Succesfully",
            data: singleSubject
        })
    } else {
        throw new Error("Failed to fetch single Subject")
    }
})

exports.updateSubject = AsyncHandler(async (req, res) => {
    const { name, description, academicTerm } = req.body;
    const subjectFound = await subjects.findOne({ name })

    if (subjectFound) {
        throw new Error("subjects already exist")
    }

    const updateSubject = await findByIdAndUpdate(req, params.id, {
        name, description, academicTerm
    }, { new: true })

    if (updateSubject) {
        res.status(201).json({
            status: "Success",
            message: "Subjects Update Successfully",
            data: updateSubject
        })
    } else {
        throw new Error("Failed to UPDATE")
    }

})

exports.deleteSubject = AsyncHandler(async (req, res) => {
    const deleteSubject = await subjects.findByIdAndDelete(req.params.id)

    if (deleteSubject) {
        res.status(201).json({
            status: "Success",
            message: "Subject DELETED Successfully"
        })
    }

})
