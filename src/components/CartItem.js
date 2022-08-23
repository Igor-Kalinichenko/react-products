import {ListGroup, Badge} from 'react-bootstrap';

function CartItem({product, removeFromCart}){
    return <ListGroup.Item>{product.brand} {product.model} {product.price.toFixed(2)} UAH
    <Badge className='ml-3 text-white bg-danger' pill variant="danger" onClick={() => removeFromCart(product.id)}>Remove</Badge>
    </ListGroup.Item>
}
 export default CartItem