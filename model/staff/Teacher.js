const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateEmployed: {
        type: Date,
        default: Date.now,
    },
    teacherId: {
        type: String,
        required: true,
        default: function () {
            return (
                "TEA" + Math.floor(100 + Math.random() * 900) +
                Date.now().toString().slice(2, 4) +
                this.name.split(" ").map(name => name[0]).join("").toUpperCase()

            );
        },
    },
    isWitdrawn: {
        type: Boolean,
        default: false,
    },
    isSuspended: {
        type: Boolean,
        default: false,
    },

    role: {
        type: String,
        default: "teacher",
    },
    subject: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "course",
        // required: true,
    },
    duration: {
        type:String
    },
    appicationStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
    program: {
        type: String,
        // ref: "Program",
        // required: true
    },
    classLevel: {
        type: String,
        ref: "ClassLevel",
        // required: true,

    },

    academicYear: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "AcademicYear",
        // required: true,
    },
    examsCreated: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
    }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        // required: true,
    },
    academicTerm: {
        type: String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "AcademicTerm",
        // requred: true,
    }



}, {
    timestamps : true,
});

const Teacher = mongoose.model("Teacher", teacherSchema)
module.exports = Teacher;

