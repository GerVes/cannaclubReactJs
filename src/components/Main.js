import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import Carrito from "./Carrito";
import Membresias from "./Membresias";
import Galeria from "./Galeria";
import Home from "./Home";


const Main = () => {
    return (
        <main>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/productos/:variedad" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/membresias" element={<Membresias />} />
                <Route path="/galeria" element={<Galeria />} />
            </Routes>




        </main>
    )
}

export default Main;