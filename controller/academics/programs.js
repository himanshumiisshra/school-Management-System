const AsyncHandler = require("express-async-handler")
const programs = require("../../model/academics/Program")
const Admin = require("../../model/staff/Admin")

exports.createPrograms = AsyncHandler(async (req, res) => {
    const {name, description, duration} =req.body;
    const programFound = await Admin.findOne({name})
    if(programFound){
        throw new Error("Program alreadt exist")
    }

    const program = await programs.create({
        name, description, duration
    })

    res.status(201).json({
        status: "Success",
        message: "Program Created Successfully",
        data: program

    })
})

exports.getAllPrograms = AsyncHandler(async (req, res) => {
    const progrems = await programs.find({})

    if(progrems){
        res.status(201).json({
            status: "Success",
            message: "All programs Fetched Sccessfully",
            data:progrems
        })
    }else {
        throw new Error("cannot fetch all Programs")
    }
})


exports.getSinglePrograms = AsyncHandler(async (req,res) => {
    const prog = await programs.findById(req.params.id)

    if(prog){
        res.status(201).json({
            status: "Success",
            message: 'Single Program Fetched Successfully',
            data: prog
        })
    }else {
        throw new Error("failed to fetch Single PRogram")
    }
})


exports.updatePrograms = AsyncHandler(async (req,res) => {
    const {name, description, duration }= req.body

    const createdProgram = await programs.findOne({name})

    if(createdProgram){
        throw new Error("Program already exist");
    }

    const updateProgram = await programs.findByIdAndDelete(req.params.id, {
        name, description, duration
    }, {new: true})

    if(updateProgram){
        res.status(201).json({
            status: "Success",
            message: "Successfully program UPDATED",
            data: updateProgram
        })
    }else {
        throw new Error("Failed to update")
    }
})

exports.deleteProgram = AsyncHandler(async(req,res) => {
    const deleteProgram = await programs.findByIdAndDelete(req.params.id)

    if(deleteProgram){
        res.status(201).json({
            status: "Success",
            message: "Successfully DELETED"

        })
    }
})