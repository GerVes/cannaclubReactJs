import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="header__navbar">

            <Link to="/" className="header__link">Home</Link>

            <Link to="/productos" className="header__link">Productos</Link>

            <Link to="/membresias" className="header__link">Membresias</Link>

            <Link to="/galeria" className="header__link">Galeria</Link>

            <CartWidget />



        </nav>
    )
}

export default Navbar;