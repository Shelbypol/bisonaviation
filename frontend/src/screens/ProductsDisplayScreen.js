import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts, listCategories} from '../actions/productActions'
import Paginate from '../components/Paginate'
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";

const ProductsDisplayScreen = ({match, history}) => {

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products, pages, page} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));

    }, [dispatch, keyword, pageNumber]);


    return (
        <>
            <Meta title='Bison | Products'/>

            <Row xs={12}>

                <Col xs={3}>
                    <Row xs={12}>
                        <h3>Categories</h3>
                    </Row>
                    <Row xs={12}>
                        {products.map(product => (
                            <Col xs={12} key={product._id} sm={12} md={6} lg={4}>
                                <h5>
                                    {product.category}
                                </h5>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={9}>
                    <h1>Latest Products</h1>
                    {loading ?
                        (<Loader/>)
                        : error ?
                            (<Message variant='danger'>{error}</Message>)
                            : (
                                <>
                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
                                    <Row>
                                        {products.map(product => (
                                            <Col key={product._id} sm={12} md={6} lg={4}>
                                                <Product product={product} history={history} productId={product._id}/>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
                                </>
                            )
                    }
                </Col>
            </Row>
        </>
    )
};

export default ProductsDisplayScreen;