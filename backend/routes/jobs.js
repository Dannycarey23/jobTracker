const express = require('express');
const job = require('../models/jobModel')
const {
    createJob,
    getJobs,
    getJob,
    deleteJob,
    updateJob
} = require('../controllers/jobController')

const router = express.Router();

router.get('/', getJobs)

router.get('/:id', getJob)

router.post('/', createJob)

router.delete('/:id', deleteJob)

router.patch('/:id', updateJob)

module.exports = router; 