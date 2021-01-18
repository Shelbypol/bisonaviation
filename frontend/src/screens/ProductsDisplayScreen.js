import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts, listCategories, listProductsInCat} from '../actions/productActions'
import Paginate from '../components/Paginate'
import Meta from "../components/Meta";
import ProductCarousel from "../components/ProductCarousel";
import ProductCategories from "../components/ProductCategories";

const ProductsDisplayScreen = ({match, history}) => {

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products, pages, page} = productList;

    // const productsCat = useSelector(state => state.productsCat);
    // const {catLoading, catError, catProducts} = productsCat;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        // dispatch(listProductsInCat);

    }, [dispatch, keyword, pageNumber]);


    return (
        <>
            <Meta title='Bison | Products'/>

            <Row xs={12}>
                <Col xs={2}>
                    {loading ?
                        (<Loader/>)
                        : error ?
                            (<Message variant='danger'>{error}</Message>)
                            : (
                                <>
                                    <Row xs={12} className='global_accentFont text-center my-3 '>
                                        <h5 className='global_bisonRedTxt'>Categories</h5>
                                    </Row>
                                    {
                                        products.map(product => (
                                            <Row xs={12} key={product._id} sm={12} md={6} lg={4}
                                                 className='global_cursor global_bisonFadedRedHover border-right'>
                                                <ProductCategories category={product.category} history={history}
                                                                   productId={product._id}/>
                                            </Row>
                                        ))
                                    }
                                </>
                            )
                    }


                    {/*    MANUFACTURES     */
                    }
                    {/*<Row xs={12} className='global_accentFont text-center my-3 '>*/}
                    {/*    <h5 className='global_bisonRedTxt'>Manufactures</h5>*/}
                    {/*</Row>*/}
                    {/*{*/}
                    {/*    products.map(product => (*/}
                    {/*        <Row xs={12} key={product._id} sm={12} md={6} lg={4}*/}
                    {/*             className='global_cursor global_bisonFadedRedHover border-right'>*/}
                    {/*            <h6>*/}
                    {/*                {product.brand}*/}
                    {/*            </h6>*/}
                    {/*        </Row>*/}
                    {/*    ))*/}
                    {/*}*/}

                </Col>
                <Col xs={10}>
                    {loading ?
                        (<Loader/>)
                        : error ?
                            (<Message variant='danger'>{error}</Message>)
                            : (
                                <>
                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
                                    <Row className='d-flex'>
                                        {products.map(product => (
                                            <Col key={product._id} sm={12} md={6} lg={3}
                                                 className='d-flex flex-row align-items-stretch'>
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