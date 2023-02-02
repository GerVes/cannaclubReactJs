import Navbar from './Navbar'
import { Link } from "react-router-dom";

function Header() {
    return (

        <header>
            <Link to="/" className = "logoHome">
                <img className="navbar__img" src="/logoSinFondo.png" alt="" />
            </Link>
            <Navbar />

        </header>
    )
}

export default Header;