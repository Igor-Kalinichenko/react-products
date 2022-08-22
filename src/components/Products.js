import { useEffect, useState } from "react";
import {Container, Row} from 'react-bootstrap';
import Product from "./Product";

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts([{
            id: 1,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Low Cut Shoe',
            price: 1340,
            imgSrc: 'https://megasport.ua/ua/image/products/50_20211_chas21346_nbk_1_1611317691-62fde3c.jpg'
        },{
            id: 2,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Beck',
            price: 1250,
            imgSrc: 'https://megasport.ua/ua/image/products/50_20211_chas21751_ww001_1_1613562909-62fde3c.jpg'
        },{
            id: 3,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'Softride Enzo',
            price: 2290,
            imgSrc: 'https://megasport.ua/ua/image/products/16309218406135e4703cbaf7.92999550-62fde3c.jpeg'
        },{
            id: 4,
            categoryName: 'Кроссовки',
            brand: 'Nike',
            model: 'Downshifter',
            price: 2760,
            imgSrc: 'https://megasport.ua/ua/image/products/16326615816150704de79287.46081432-62fde3c.jpeg'
        },{
            id: 5,
            categoryName: 'Кроссовки',
            brand: 'Nike',
            model: 'Venture Runner',
            price: 2564,
            imgSrc: 'https://megasport.ua/ua/image/products/09_20203_ck2944_002_1_1596540450-62fde3c.jpg'
        },{
            id: 6,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'Anzarun Lite',
            price: 2590,
            imgSrc: 'https://megasport.ua/ua/image/products/12_20211_371128_01_1_1613489097-62fde3c.jpg'
        },{
            id: 7,
            categoryName: 'Кроссовки',
            brand: 'Anta',
            model: 'Running Shoe',
            price: 2590,
            imgSrc: 'https://megasport.ua/ua/image/products/1634679824616f3c10b09a17.57856079-62fde3c.jpeg'
        },{
            id: 8,
            categoryName: 'Кроссовки',
            brand: 'Puma',
            model: 'X-Ray 2',
            price: 3390,
            imgSrc: 'https://megasport.ua/ua/image/products/6243457353c33-62fde3c.jpeg'
        },{
            id: 9,
            categoryName: 'Кроссовки',
            brand: 'Champion',
            model: 'Low Cut Shoe 2.0',
            price: 1650,
            imgSrc: 'https://megasport.ua/ua/image/products/6212a06f82e16-62fde3c.jpeg'
        },{
            id: 10,
            categoryName: 'Кроссовки',
            brand: 'Anta',
            model: 'Casual Shoes',
            price: 2370,
            imgSrc: 'https://megasport.ua/ua/image/products/1653551794628f32b28306a0.55816811-62fde3c.jpeg'
        }])
    }, []);

    return <Container>
    <Row>
      {products.map(product => <Product key={product.id} product={product}/>)}
    </Row>
  </Container>
}
 export default Products;