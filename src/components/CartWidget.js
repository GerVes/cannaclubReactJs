import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
  <>

    <Link to="/Carrito">
      <span className="material-icons">shopping_cart</span>
    </Link>

    <span className="numeroHardcodeado header__link">20g</span>
  </>
  )
}

export default CartWidget;