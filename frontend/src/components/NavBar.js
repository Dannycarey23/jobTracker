import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <header>
            <Link to="/">
                <img src="assets/JTLogo.png" alt="Project logo"></img>
            </Link>
            <hr></hr>
            <nav>
                <ul>
                    <Link to="/jobs"><li>Jobs</li></Link>
                    <Link to="/diary"><li>Diary</li></Link>
                    <Link to="/careers"><li>Links</li></Link>
                </ul>
            </nav>

        </header>
    )
}

export default NavBar;