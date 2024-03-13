import JobDetails from "../components/JobDetails"
import JobsData from "./JobsData";
import { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const JobsContainer = () => {

    const [jobs, setJobs] = useState(null)
    const [selectedJob, setSelectedJob] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if (response.ok) {
                setJobs(json)
                console.log(jobs)
            }
        }
        fetchJobs()

    }, [])

    const handleClick = (job) => {
        console.log(job.jobTitle)
    }

    return (
        <div className='jobContainer'>
            <div className="container mx-auto flex justify-center items-center" >
                {jobs && jobs.map((job) => (
                    <JobDetails key={job._id} job={job} handleClick={handleClick} selectedJob={selectedJob} />
                ))}
            </div>
        </div>
    )
}

export default JobsContainer