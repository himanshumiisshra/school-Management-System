const AsyncHandler = require("express-async-handler")
const AcademicYear = require("../../model/academics/AcademicYear");
const Admin = require("../../model/staff/Admin");

exports.createAcademicYear = AsyncHandler(async (req, res) => {
    const { name, fromYear, toYear } = req.body;

    const academicYear = await AcademicYear.findOne({ name })
    if (academicYear) {
        throw new Error('Academic year already exists')
    }
    const academicYearCreated = await AcademicYear.create({
        name, fromYear, toYear, createdBy: req.userAuth._id
    });
    const admin = await Admin.findById(req.userAuth._id);
    admin.academicYears.push(academicYearCreated._id)
    await admin.save()

    res.status(201).json({
        status: "Success",
        message: "Acedemic Year created Successfully",
        data: academicYearCreated
    })

})

exports.getAllAcademicYear = AsyncHandler(async (req, res) => {
    const academicYears = await AcademicYear.find({})
    if (academicYears) {
        res.status(201).json({
            status: "Success",
            message: 'All Accademic Year Data Fetched Successfully',
            data: academicYears
        })

    }
    throw new Error("Cannot Fetch All Academic Year")

})

exports.getSingleAcademicYear = AsyncHandler(async (req, res) => {
    const SingleAcademicYear = await AcademicYear.findById(req.params.id)
    if (SingleAcademicYear) {
        res.status(201).json({
            status: "Success",
            message: "Single Admin fetched Successfully",
            data: SingleAcademicYear
        })
    }
    throw new Error("Cannot Fetch single Academic Year")
})

exports.updateAcademicYear = AsyncHandler(async (req, res) => {
    const { name, fromYear, toYear } = req.body

    const createAcademicYearFound = await AcademicYear.findOne({ name })
    if (createAcademicYearFound) {
        throw new Error("academic year already exist")
    }

    const updateAcademicYear = await AcademicYear.findByIdAndUpdate(req.params.id, {
        name, fromYear, toYear, createdBy: req.userAuth._id
    }, { new: true })

    if (updateAcademicYear) {
        res.status(201).json({
            status: "Success",
            messsage: "Successfully updated Academic Year",
            data: updateAcademicYear
        })
    }
    throw new Error("failed to update")
})

exports.deleteAcademicYear = AsyncHandler(async (req, res) => {
    const daleteAcademicYear = await AcademicYear.findByIdAndDelete(req.params.id)

    if (daleteAcademicYear) {
        res.status(201).json({
            status: "Success",
            message: "Deleted Successfully"
        })
    }
})
