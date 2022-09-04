import { useEffect, useState, useContext } from "react";
import {Container, Row} from 'react-bootstrap';
import Product from "./Product";
import Cart from "./Cart";
import ProfileContext from "../context/ProfileContext";

function Products() {
    const {setMessage} = useContext(ProfileContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts([{
            id: 1,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Low Cut Shoe',
            price: 1340,
            imgSrc: 'https://megasport.ua/ua/image/products/50_20211_chas21346_nbk_1_1611317691-62fde3c.jpg',
            addedToCart: false,
            count: 1
        },{
            id: 2,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Beck',
            price: 1250,
            imgSrc: 'https://megasport.ua/ua/image/products/50_20211_chas21751_ww001_1_1613562909-62fde3c.jpg',
            addedToCart: false,
            count: 1
        },{
            id: 3,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'Softride Enzo',
            price: 2290,
            imgSrc: 'https://megasport.ua/ua/image/products/16309218406135e4703cbaf7.92999550-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        },{
            id: 4,
            categoryName: 'Кроссовки',
            brand: 'Nike',
            model: 'Downshifter',
            price: 2760,
            imgSrc: 'https://megasport.ua/ua/image/products/16326615816150704de79287.46081432-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        },{
            id: 5,
            categoryName: 'Кроссовки',
            brand: 'Nike',
            model: 'Venture Runner',
            price: 2564,
            imgSrc: 'https://megasport.ua/ua/image/products/09_20203_ck2944_002_1_1596540450-62fde3c.jpg',
            addedToCart: false,
            count: 1
        },{
            id: 6,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'Anzarun Lite',
            price: 2590,
            imgSrc: 'https://megasport.ua/ua/image/products/12_20211_371128_01_1_1613489097-62fde3c.jpg',
            addedToCart: false,
            count: 1
        },{
            id: 7,
            categoryName: 'Кроссовки',
            brand: 'Anta',
            model: 'Running Shoe',
            price: 2590,
            imgSrc: 'https://megasport.ua/ua/image/products/1634679824616f3c10b09a17.57856079-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        },{
            id: 8,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'X-Ray 2',
            price: 3390,
            imgSrc: 'https://megasport.ua/ua/image/products/6243457353c33-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        },{
            id: 9,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Low Cut Shoe 2.0',
            price: 1650,
            imgSrc: 'https://megasport.ua/ua/image/products/6212a06f82e16-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        },{
            id: 10,
            categoryName: 'Кроссовки',
            brand: 'Anta',
            model: 'Casual Shoes',
            price: 2370,
            imgSrc: 'https://megasport.ua/ua/image/products/1653551794628f32b28306a0.55816811-62fde3c.jpeg',
            addedToCart: false,
            count: 1
        }])
    }, []);

    const addToCart = id => {
        const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
        setProducts(products.map(product => ({...product, addedToCart: product.id === id ? true : product.addedToCart})));
        setMessage({text: `Product ${productName} successfully added to cart`});
    }
    const removeFromCart = id => {
        const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
        setProducts(products.map(product => ({...product, addedToCart: product.id === id ? false : product.addedToCart})));
        setMessage({text: `Product ${productName} successfully removed from cart`, variant: 'danger'});
    }

    const changeCount = (id, dataCount) => {
        setProducts(products.map(product => ({...product, 
            count: product.id === id ? (dataCount ? product.count + 1 : product.count - 1) : product.count})))
    }

    return <Container>
    <Row>
      {products.map(product => <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />)}
    </Row>
    {
        products.filter(product => product.addedToCart).length ?
            <Cart products={products.filter(product => product.addedToCart)} removeFromCart={removeFromCart} changeCount={changeCount} /> : ''
    }
  </Container>
}
 export default Products;