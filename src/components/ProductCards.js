import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCards = () => {
    return (
        <cards>
            <Card className="cardProducto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./24kgold.jpg" />
                <Card.Body>
                    <Card.Title >24kgold</Card.Title>
                    <Card.Text>

                        <br />
                        Genetica: Indica dominante (60%)
                        <br />
                        THC : 18-24%
                        <br />
                        Sabor: Citrico, Fresco
                        <br />
                        Efecto : Fuerte
                    </Card.Text>

                    <Button variant="success">Agregar al carrito</Button>
                </Card.Body>
            </Card>


            <Card className="cardProducto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./cream caramel.jpg" />
                <Card.Body>
                    <Card.Title >Cream Caramel</Card.Title>
                    <Card.Text>
                        <br />
                        Genetica: Indica dominante (90%)
                        <br />
                        THC : 15-20%
                        <br />
                        Sabor: Dulce, Terroso
                        <br />
                        Efecto : Fuerte
                    </Card.Text>
                    <Button variant="success">Agregar al carrito</Button>
                </Card.Body>
            </Card>


            <Card className="cardProducto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="gelato33.jpg" />
                <Card.Body>
                    <Card.Title>Gelato33</Card.Title>
                    <Card.Text>
                        <br />
                        Genetica: Sativa/indica (50%)
                        <br />
                        THC : 25%
                        <br />
                        Sabor: Citrico, Terroso
                        <br />
                        Efecto : Equilibrado
                    </Card.Text>
                    <Button variant="success">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </cards>
    );
}

export default ProductCards;