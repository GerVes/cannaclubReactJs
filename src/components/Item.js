import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom"



const Item = ({ producto }) => {
    
    return (
        <article key={producto.id} className="col-12  col-md-3">

            <Card className="cardProducto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.img} />
                <Card.Body>
                    <Card.Title >{producto.nombre}</Card.Title>
                    <p>Precio: {producto.precio}</p>

                    <Card.Text>

                        <Link to={"/item/" + producto.id}>

                            <Button variant="success">Ver mas</Button>

                        </Link>

                    </Card.Text>

                </Card.Body>
            </Card>


        </article>
    )
}

export default Item







{/* <article key={producto.id}>
<h3>{producto.nombre}</h3>
<img src={producto.nombre} />
<p>{producto.precio}</p> */}

// <Card className="cardProducto" style={{ width: '18rem' }}>
// <Card.Img variant="top" src={producto.img} />
// <Card.Body>
//     <Card.Title >{producto.nombre}</Card.Title>
//     <Card.Text>

//         {/* <br />
//         Genetica: Indica dominante (60%)
//         <br />
//         THC : 18-24%
//         <br />
//         Sabor: Citrico, Fresco
//         <br />
//         Efecto : Fuerte */}

//         <Link to={"/item/" + producto.id}>
//             <Button variant="success">Ver mas</Button>
//         </Link>
//     </Card.Text>

// </Card.Body>
// </Card>


// </article>
// )
// }

// export default Item