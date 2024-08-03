const express = require('express')

const morgan = require('morgan')

const app = express();

//middlewares
app.use(morgan("dev"));

//Route

//admin register
app.post('/api/v1/admins/register', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin has been registered'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})


//admin login
app.post('/api/v1/admins/login', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin has been logged In'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

// get all admin
app.get('/api/v1/admins', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'List of all ADMIN'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})


//get single admin
app.get('/api/v1/admins/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'getting Single Admin'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//update Admin
app.put('/api/v1/admins/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Update Admin'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//delete Admin
app.delete('/api/v1/admin/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'delete admin'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin suspeding teacher
app.put('/api/v1/admin/suspend/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin suspend teacher'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin UN-suspeding teacher
app.put('/api/v1/admin/unsuspend/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin unsuspend teacher'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin withdrawing teacher
app.put('/api/v1/admin/withdraw/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin withdraw teacherr'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin unwithdraw teacher
app.put('/api/v1/admin/unwithdraw/teacher/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin unwithdraw teacher'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin publishing exam results
app.put('/api/v1/admin/publish/exam/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin publish exam'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

//admin unpublishing exam results
app.put('/api/v1/admin/unpublish/exam/:id', (req, res) => {
    try {
        res.status(201).json({
            status:'Success',
            data: 'Admin unpublish exam'
        })
    } catch (error) {
        res.json({
            status:'failed',
            error: error.message,
        })
    }
})

module.exports = app;