import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="container mx-auto">
            <Link to="/" >
                <img src="assets/JTLogo.png" alt="Project logo"></img>
            </Link>
            <Link to="/jobs" className="pr-2"><u>Jobs</u></Link>
            <Link to="/careers"><u>Links</u></Link>
        </nav>


    )
}

export default NavBar;