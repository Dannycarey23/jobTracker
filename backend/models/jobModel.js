const mongoose = require('mongoose')

const Schema = mongoose.Schema

const jobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    hiringManager: {
        type: String,
        required: false
    },
    jobSpec: {
        type: String,
        required: true
    },
    coverLetter: {
        type: String,
        required: false
    },
    dateApplied: {
        type: Date,
        required: true
    },
    response: {
        type: Boolean,
        required: true
    },
    nextSteps: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Job', jobSchema)