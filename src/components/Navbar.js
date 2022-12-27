

const Navbar = () => {
    return (
        <nav className = "header__navbar">
            <a href="#" className = "header__link">Home</a>
            
            <a href="#" className = "header__link">Productos</a>

            <a href="#" className = "header__link">Membresias</a>

            <a href="#" className = "header__link">Galeria</a>

            <span className="material-icons header__link">shopping_cart</span>

            <span className = "numeroHardcodeado header__link">2</span>
        </nav>
    )
}

export default Navbar;