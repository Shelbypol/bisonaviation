import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Button, Card} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts, listCategories, listProductsInCat} from '../actions/productActions'
import Paginate from '../components/Paginate'
import Meta from "../components/Meta";
import ProductCategories from "../components/ProductCategories";

const ProductsDisplayScreen = ({match, history}) => {

    const [updateCat, setUpdateCat] = useState('');


    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products, pages, page} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber, updateCat]);


    const sortByCategoryHandler = (a) => {
        // setUpdateClick(!updateClick);
        return setUpdateCat(a)
    };

    return (
        <>
            <Meta title='Bison | Products'/>

            <Row xs={12}>
                {loading ?
                    (<Loader/>)
                    : error ?
                        (<Message variant='danger'>{error}</Message>)
                        : (
                            <>
                                <Col xs={2}>
                                    <Row xs={12} className='global_accentFont text-center my-3 '>
                                        <h5 className='global_bisonRedTxt'>Categories</h5>
                                    </Row>
                                    {products.map(product => (
                                        <Row key={product._id} xs={12} sm={12} md={6} lg={4}
                                             className='global_cursor global_bisonFadedRedHover border-right'>
                                            <Button
                                                onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                className='btn btn-block global_bisonRedBgWhiteHoverBgBtnRedBorder p-1'
                                                type='button'
                                            >
                                                <h6>
                                                    {product.category}
                                                </h6>
                                            </Button>
                                        </Row>
                                    ))}
                                    {/*// <ProductCategories key={product._id} product_id={product._id} category={product.category} />*/}
                                </Col>

                                <Col xs={10}>
                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>

                                    <Row className='d-flex'>
                                        {updateCat === '' ? (
                                            <>
                                                {products.map(product => (
                                                    <Col key={product._id} sm={12} md={6} lg={3}
                                                         className='d-flex flex-row align-items-stretch'>
                                                            <Product product={product} history={history}
                                                                     product_id={product._id}/>
                                                    </Col>
                                                ))}
                                            </>
                                        ) : (
                                            <>
                                                {products.filter(product => product.category === updateCat).map(filteredProduct => (
                                                    <Col key={filteredProduct._id} sm={12} md={6} lg={3}
                                                         className='d-flex flex-row align-items-stretch'>
                                                        <Product product={filteredProduct} history={history}
                                                                 product_id={filteredProduct._id}/>
                                                    </Col>
                                                ))}
                                            </>
                                        )}
                                    </Row>

                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
                                </Col>
                            </>
                        )}
            </Row>
        </>
    )
};

export default ProductsDisplayScreen;