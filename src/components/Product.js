import {Col, Card, Button} from 'react-bootstrap';

function Product({product}) {
    return <Col xs={12} sm={6} md={4} lg={3}>
    <Card className='mb-3'>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
            <Card.Title>{product.categoryName} {product.brand} {product.model}</Card.Title>
            <Card.Text className='font-weight-bold text-primary'>{product.price} UAH</Card.Text>
            <Button variant="success">Add to Card</Button>
        </Card.Body>
    </Card>
  </Col>
}
export default Product;