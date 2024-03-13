import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <nav className="container mx-auto columns-2">
            <div className="w-1/2">
                <Link to="/" >
                    <img src="assets/JTLogo.png" alt="Project logo" className=""></img>
                </Link>
            </div>
            <div className="w-1/2 text-right object-right-bottom">
                <Link to="/jobs" className="pr-2"><u>Jobs</u></Link>
                <Link to="/careers"><u>Links</u></Link>
            </div>
        </nav>


    )
}

export default NavBar;