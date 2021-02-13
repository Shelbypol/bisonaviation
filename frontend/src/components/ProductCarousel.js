import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {
    Carousel, Image} from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

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
        <Carousel pause='hover' className='bg-none border-0 d-flex justify-content-end'>
            {products.map((product, index) => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/product/${product._id }`}>
                            <h3 className='text-center d-flex justify-content-center pb-4'>{product.name}{index}</h3>
                            <Image src={product.image} alt={product.name} className='h-75 w-75 ml-5 mt-4'/>
                        </Link>
                    </Carousel.Item>
            ))}
        </Carousel>
    )
};

export default ProductCarousel