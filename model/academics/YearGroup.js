const mongoose = require("mongoose");

const yaerGroupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true,
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicYear",
            reuired: true,
        }
    },
    {
        timestamps: true
    }
);

//model

const YearGroup = mongoose.model("YearGroup" , yaerGroupSchema)
module.exports = YearGroup;