const AsyncHandler = require("express-async-handler");
const yearGroup = require("../../model/academics/YearGroup");
// const admin = require("../../model/staff/Admin");
const Admin = require("../../model/staff/Admin");

exports.createYearGroup = AsyncHandler(async (req,res) => {
    const {name, academicYear} = req.body;

    const yearG = await yearGroup.findOne({name})

    if(yearG){
        throw new Error("Year Group already exist")
    }

    const yearGroupCreated = await yearGroup.create({
        name,
        academicYear,
        createdBy: req.userAuth._id
        
    })

    const admin = await Admin.findById(req.userAuth._id)

    if(!admin){
        throw new Error("admin not found")
    }

    admin.yearGroups.push(yearGroupCreated._id)
    await admin.save()

    res.status(201).json({
        status: "Success",
        message: "year Group Created Successfully",
        data: yearGroupCreated
    })

})


exports.getAllYearGroup = AsyncHandler(async (req,res) => {
    const yearGroup = await yearGroup.find({})

    if(yearGroup){
        res.status(201).json({
            status: "Success",
            message: "All year Group fetched Successfully",
            data: yearGroup
        })
    }else {
        throw new Error("Failed to fetch all year group")
    }
})

exports.getSingleYearGroup = AsyncHandler(async (req,res) => {
    const singleYearGroup = await yearGroup.findById(req.params.id)

    if(singleYearGroup){
        res.status(201).json({
            status: "Success",
            message: "Single year Group fetched successfully",
            data: singleYearGroup
        })
    }else {
        throw new Error("failed to fetch single Year group")
    }
})

exports.updateYearGroup = AsyncHandler(async (req,res) => {
    const {name, academicYear} = req.body;

    const ygFound = await yearGroup.findOne({name})

    if(ygFound){
        throw new Error("year group exist already")
    }

    const yearGroupFound = await yearGroup.findByIdAndUpdate(req.params.id, {
        name,
        academicYear
    })

    if(yearGroupFound){
        res.status(201).json({
            status: "Success",
            message: "year Group updated Successfully",
            data: yearGroupFound
        })
    }else {
        throw new Error("Failed to update year group")
    }
})

exports.deleteYearGroup = AsyncHandler(async (req,res) => {
    const deleteYearGroup = await yearGroup.findByIdAndDelete(req.params.id)

    if(deleteYearGroup){
        res.status(201).json({
            status: "Success",
            message: "Year Group Deleted Successfully"
        })
    }
})

