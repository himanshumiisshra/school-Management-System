const AsyncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/academics/AcademicTerm");
const Admin = require("../../model/staff/Admin");

exports.createAcademicTerm = AsyncHandler(async (req, res) => {
    const { name, description, duration, createdBy } = req.body;

    const academicTerm = await AcademicTerm.findOne({ name })

    if (academicTerm) {
        throw new Error("Academic Term already exist")
    }
    const academicTermCreated = await AcademicTerm.create({
        name, description, duration, createdBy
    });
    const admin = await Admin.findById(req.userAuth._id);
    admin.academicTerms.push(academicTermCreated._id)
    await admin.save()

    res.status(201).json({
        status: "Success",
        message: "Academic Term Created Successfully",
        data: academicTermCreated
    })

})

exports.getAllAcademicTerm = AsyncHandler(async (req, res) => {
    const academicTerm = await AcademicTerm.find({})
    if (academicTerm) {
        res.status(201).json({
            status: "Success",
            message: "All Academic Term Data fetched Successfully",
            data: academicTerm
        })
    } else {
        throw new Error("Cannot Fetch All Academic Terms")
    }

})

exports.getSingleAcademicTerm = AsyncHandler(async (req, res) => {
    conosle.log("working",req.params.id)
    const singleAcademicTerm = await AcademicTerm.findById(req.params.id)
    if (singleAcademicTerm) {
        res.status(201).json({
            status: "Success",
            message: "Single Term Fetched Successfully",
            data: singleAcademicTerm
        })
    } else {
        throw new Error("cannot fetch Single Academic Term")
    }


})

exports.updateAcademicTerm = AsyncHandler(async (req, res) => {
    console.log("working")
    const { name, description, duration } = req.body
    console.log("req.body", req.body)
    console.log("PARAMS",req.params.id)

    const createAcademicTermFound = await AcademicTerm.findOne({ name })

    if (createAcademicTermFound) {
        throw new Error('Academic Term already Exist')
    }

    const updateAcademicTerm = await AcademicTerm.findByIdAndUpdate(req.query.id, {
        name, description, duration, createdBy: req.userAuth._id
    }, { new: true })

    if (updateAcademicTerm) {
        res.status(201).json({
            status: "success",
            message: "Successfully updated Academic Term",
            data: updateAcademicTerm
        })
    }
    else {
        throw new Error("Failed to UPDATE")
    }

})

exports.deleteAcademicTerm = AsyncHandler(async (req, res) => {
    const deleteAcademicTerm = await AcademicTerm.findByIdAndDelete(req.params.id)

    if (deleteAcademicTerm) {
        res.status(201).json({
            status: "Success",
            message: "Deleted Successfully"
        })
    }
})