import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {
    Carousel, Image
} from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";
import '../style/productCarousel.css'

// import '../style/ProductCarousel.css'


const ProductCarousel = () => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel interval={3000} controls={false} indicators={false} pause='hover' className='bg-none border-0 '>
            {products.map((product, index) => (
                <Carousel.Item key={product._id} className=''>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} className='ProductCarousel_img'/>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
};

export default ProductCarousel