import JobDetails from "../components/JobDetails"
import { useEffect, useState } from "react";

const JobsContainer = () => {

    const [jobs, setJobs] = useState(null)
    // const [selectedJob, setSelectedJob] = useState(null)

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('/api/jobs')
            const json = await response.json()

            if (response.ok) {
                setJobs(json)
            }
        }

        fetchJobs()
    }, [])

    return (
        <div className='jobContainer'>
            <div className="container mx-auto flex justify-center items-center">
                {jobs && jobs.map((job) => (
                    <JobDetails key={job._id} job={job} />
                ))}
            </div>
        </div>
    )
}

export default JobsContainer