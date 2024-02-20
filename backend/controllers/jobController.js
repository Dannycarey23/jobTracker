const Job = require('../models/jobModel')
const mongoose = require('mongoose')

// get all jobs
const getJobs = async (req, res) => {
    const jobs = await Job.find({}).sort({ createdAt: -1 })

    res.status(200).json(jobs)
}

// get a single job
const getJob = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such job' })
    }
    const job = await Job.findById(id)
    if (!job) {
        return res.status(404).json({ error: 'No such job' })
    }
    res.status(200).json(job)
}

// create a new job
const createJob = async (req, res) => {
    const { jobTitle, company, industry, hiringManager, jobSpec, coverLetter, dateApplied, response, nextSteps } = req.body

    let emptyFields = []

    if (!jobTitle) {
        emptyFields.push('jobTitle')
    }
    if (!company) {
        emptyFields.push('load')
    }
    if (!industry) {
        emptyFields.push('industry')
    }
    if (!jobSpec) {
        emptyFields.push('jobSpec')
    }
    if (!dateApplied) {
        emptyFields.push('dateApplied')
    }
    if (!response) {
        emptyFields.push('response')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all form fields marked with a *', emptyFields })
    }

    try {
        const job = await job.create({ jobTitle, company, industry, hiringManager, jobSpec, coverLetter, dateApplied, response, nextSteps })
        res.status(200).json(job)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a job
const deleteJob = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such job' })
    }

    const job = await Job.findOneAndDelete({ _id: id })

    if (!job) {
        return res.status(404).json({ error: 'No such job' })
    }

    res.status(200).json(job)
}

// update an existing job

const updateJob = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such job' })
    }

    const job = await Job.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!job) {
        return res.status(404).json({ error: 'No such job' })
    }

    res.status(200).json(job)

}

module.exports = {
    getJob,
    getJobs,
    createJob,
    deleteJob,
    updateJob
}