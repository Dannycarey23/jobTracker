import NavBar from "../components/NavBar";
// import JobForm from "../components/JobForm";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";


const MainContainer = () => {

    const [jobs, setJobs] = useState(null)

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
        <div className='mainContainer'>

            <NavBar />
            <div className="jobList">
                {jobs && jobs.map((job) => (
                    <p key={job._id}>{job.jobTitle}</p>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default MainContainer;