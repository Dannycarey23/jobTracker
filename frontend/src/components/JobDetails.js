import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
    return (
        <Link to="/jobs/id" className="border-4 mx-auto px-4">
            <h4>Position: {job.jobTitle}</h4>
            <h6>Company: {job.company}</h6>
        </Link>
    )
}

export default JobDetails;