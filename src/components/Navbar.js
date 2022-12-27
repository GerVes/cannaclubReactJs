import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <nav className = "header__navbar">
            <a href="#" className = "header__link">Home</a>
            
            <a href="#" className = "header__link">Productos</a>

            <a href="#" className = "header__link">Membresias</a>

            <a href="#" className = "header__link">Galeria</a>

            <CartWidget />

            
        </nav>
    )
}

export default Navbar;