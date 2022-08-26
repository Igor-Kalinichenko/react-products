import {ListGroup, Badge, Button} from 'react-bootstrap';

function CartItem({product, removeFromCart, changeCount}){
    return <ListGroup.Item>{product.brand} {product.model} {product.price.toFixed(2)} UAH
        <Button className='mx-3 font-weight-bold'
                variant="success"
                data-count 
                onClick={(e) => changeCount(product.id, e.currentTarget.attributes['data-count'])}>+</Button>
        {product.count}
        <Button className='ml-3 font-weight-bold'
                variant="success"
                disabled = {product.count <= 1 ? true : false}
                onClick={(e) => changeCount(product.id)}>-</Button>
        <Badge className='ml-3 text-white bg-danger' pill onClick={() => removeFromCart(product.id)}>Remove</Badge>
    </ListGroup.Item>
}
 export default CartItem