import './Cart.css';
import {ListGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import Total from './Total';

function Cart({products, removeFromCart}) {
    const [total, setTotal] = useState(0);

    useEffect( () => {
        setTotal(products.reduce((acc, product) => {
            return acc + product.price;
        }, 0))
    }, [products]);

    return <div className='cart-block p-4 bg-white'>
        <h3 className='text-center'>Cart</h3>
        <ListGroup>
            {
                products.map(product => <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />)
            }
        </ListGroup>
        <Total total={total} />
        </div>
}

export default Cart;