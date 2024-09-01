const AsyncHandler = require("express-async-handler");
const classLevel = require("../../model/academics/ClassLevel")
const Admin = require("../../model/staff/Admin");

exports.createClassLevel = AsyncHandler(async (req, res) => {
    const { name, description, students, subjects, teachers } = req.body

    const CheckclassLevel = await classLevel.findOne({ name })

    if (CheckclassLevel) {
        throw new Error("Class Level already Exist")
    }

    const classLevelCreated = await classLevel.create({
        name, description, students, subjects, teachers
    });
    const admin = await Admin.findById(req.userAuth._id)

    admin.classLevels.push(classLevelCreated._id)

    await admin.save()

    res.status(201).json({
        status: "Success",
        message: "Class Level Created Successfully",
        data: classLevelCreated
    })


}
)


exports.getAllClassLevel = AsyncHandler(async (req, res) => {
    const classLevel = await classLevel.find({})

    if (classLevel) {
        res.status(201).json({
            status: "Success",
            message: "All class Level fetched Successfully",
            data: classLevel
        })
    } else {
        throw new Error("cannot fetch all class level DatA")
    }
})

exports.getSingleClassLevel.AsyncHandler(async (req, res) => {
    const singleClassLevel = await classLevel.findById(req.params.id)

    if (singleClassLevel) {
        res.status(201).json({
            status: "Success",
            message: "Single Class Level Fetched Successfully",
            data: singleClassLevel
        })
    } else {
        throw new Error("cannot fetch single CLass Level")
    }

})

exports.updateClassLevel = AsyncHandler(async (req, res) => {
    const { name, description, students, subjects, teachers } = req.body;

    const createdClassLevelFound = await classLevel.findOne({ name })

    if (createdClassLevelFound) {
        throw new Error("class Level Already exits")
    }

    const updateClassLevel = await classLevel.findByIdAndUpdate(req.params.id, {
        name, description, students, subjects, teachers
    }, { new: true })

    if (updateClassLevel) {
        res.status(201).json({
            status: "Success",
            message: "Successfully updated Class Level",
            data: updateClassLevel
        })
    } else {
        throw new Error("Failed to UPDATE")
    }


})

exports.deleteClassLevel = AsyncHandler(async (req, res) => {
    const deleteClassLevel = await classLevel.findByIdAndDelete(req.params.id)

    if(deleteClassLevel){
        res.status(201).json({
            status: "Success",
            message: 'Class Level Deleted Successfully'
        })
    }
})