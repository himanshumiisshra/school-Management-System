
// register admin
exports.registerAdminController = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin has been registered'
        });
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        });
    }
}

exports.loginAdminController = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin has been logged In'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.getAllAdmins = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'List of all ADMIN'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.getSingleAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'getting Single Admin'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.updateAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Update Admin'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.deleteAdmin = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'delete admin'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.suspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin suspend teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unsuspendTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unsuspend teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.withdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin withdraw teacherr'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unwithdrawTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unwithdraw teacher'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.publishingExam = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin publish exam'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

exports.unpublishTeacher = (req, res) => {
    try {
        res.status(201).json({
            status: 'Success',
            data: 'Admin unpublish exam'
        })
    } catch (error) {
        res.json({
            status: 'failed',
            error: error.message,
        })
    }
}

