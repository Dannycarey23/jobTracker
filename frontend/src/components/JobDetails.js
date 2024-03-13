import { Link } from "react-router-dom";

const JobDetails = ({ job, handleClick }) => {
    return (
        // <Link to="/jobs/id" className="border-4 mx-auto px-4">
        <div className="border-4 mx-auto px-4" onClick={handleClick}>
            <h4>Position: {job.jobTitle}</h4>
            <h6>Company: {job.company}</h6>
        </div>
        // </Link>
    )
}

export default JobDetails;