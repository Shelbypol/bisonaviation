import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {
    Carousel, Image} from "react-bootstrap";

import Loader from "./Loader";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {listProducts, listTopProducts} from "../actions/productActions";

// import '../style/ProductCarousel.css'


const ProductCarousel = () => {

    // const dispatch = useDispatch();
    //
    // const productTopRated = useSelector(state => state.productTopRated);
    // const { loading, error, products} = productTopRated;
    //
    // useEffect(() => {
    //     dispatch(listTopProducts())
    // }, [dispatch]);

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;


    useEffect(() => {
        dispatch(listProducts());

    }, [dispatch]);


    return loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' className='bg-none border-0'>
            {products.map((product, index) => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id }`}>
                            <h5 className='global_accentFont d-flex justify-content-center pb-4'>{product.name}{index}</h5>
                            {/*<h5 className='accentFont d-flex justify-content-center'>{product.name} (${product.price})</h5>*/}
                            <Image src={product.image} alt={product.name} className='h-100 w-100'/>
                                {/*<Carousel.Caption className='carousel-caption'>*/}
                            {/*</Carousel.Caption>*/}
                        </Link>
                    </Carousel.Item>
            ))}
        </Carousel>
    )
};

export default ProductCarousel