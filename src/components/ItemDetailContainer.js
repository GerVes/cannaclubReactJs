import { useParams } from "react-router-dom"
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {  getProducts } from './data.js';

const ItemDetailContainer = () => {

    //console.log(window.location.pathname)
const [producto, setProducto] = useState({})
const [loading, setLoading]= useState(true)

    const params = useParams()
useEffect(() => {
        getProducts()
        .then((res)=> setProducto(res.find((prod) => prod.id === params.id)))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
}, [params.id])

    return (


        <div>
{
    
    !loading ? <cards>
    <Card className="cardProducto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img}/>
        <Card.Body>
            <Card.Title >{producto.nombre}</Card.Title>
            <Card.Text>

                <br />
                <p>Variedad: {producto.variedad}</p>
                <br />
                <p>THC: {producto.THC}</p>
                <br />
                <p>Sabor: {producto.sabor}</p>
                <br />
                <p>Efecto: {producto.efecto}</p>
            </Card.Text>
            <Link to={"/carrito/" + producto.id}>
                <Button variant="success">Agregar al carrito</Button>
            </Link>


        </Card.Body>
    </Card>
</cards> : <h1>"Cargando..."</h1>
}

        </div>
    )
}

export default ItemDetailContainer






// import { useParams } from "react-router-dom"
// import { Card } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'
// import { geneticas } from './data.js';

// const ItemDetailContainer = () => {

//     //console.log(window.location.pathname)
// const [producto, setProducto] = useState()


//     const params = useParams()

//     console.log(params)


// useEffect(() => {

//         const producto = geneticas.find((geneticas) => geneticas.id === params.id)

//         setProducto(producto)
// }, [])

//     return (


//         <div>
// {

//     producto ? <cards>
//     <Card className="cardProducto" style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={producto.img}/>
//         <Card.Body>
//             <Card.Title >{producto.nombre}</Card.Title>
//             <Card.Text>

//                 <br />
//                 <p>Variedad: {producto.variedad}</p>
//                 <br />
//                 <p>THC: {producto.THC}</p>
//                 <br />
//                 <p>Sabor: {producto.sabor}</p>
//                 <br />
//                 <p>Efecto: {producto.efecto}</p>
//             </Card.Text>
//             <Link to={"/carrito/" + geneticas.id}>
//                 <Button variant="success">Agregar al carrito</Button>
//             </Link>


//         </Card.Body>
//     </Card>
// </cards> : <h1>"Cargando..."</h1>
// }

{/* <cards>
                <Card className="cardProducto" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./24kgold.jpg" />
                    <Card.Body>
                        <Card.Title >{producto.id}</Card.Title>
                        <Card.Text>

                            <br />
                            {producto.variedad}
                            <br />
                            {producto.thc}
                            <br />
                            {producto.sabor}
                            <br />
                            {producto.efecto}
                        </Card.Text>
                        <Link to={"/item/" + geneticas.id}>
                            <Button variant="success">Ver mas</Button>
                        </Link>


                    </Card.Body>
                </Card>
//             </cards> */}
//         </div>
//     )
// }

// export default ItemDetailContainer