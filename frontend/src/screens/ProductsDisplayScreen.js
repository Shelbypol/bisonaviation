import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Button, Container, CardDeck, Card} from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {listProducts, listCategories, listProductsInCat} from '../actions/productActions'
import Paginate from '../components/Paginate'
import Meta from "../components/Meta";

const ProductsDisplayScreen = ({match, history}) => {

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');


    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {loading, error, products, pages, page} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber, updateCat, updateManufacturer]);

    //  SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        return setUpdateCat(a)
    };

    const allHandler = () => {
        return setUpdateCat('') && setUpdateManufacturer('')
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        return setUpdateManufacturer(a)
    };

    // const allManufacturerHandler = () => {
    //     return setUpdateCat('')
    // };

    return (
        <Container className='mx-n5'>
        <>
            <Meta title='Bison | Products'/>

            <Row xs={12}>
                {loading ?
                    (<Loader/>)
                    : error ?
                        (<Message variant='danger'>{error}</Message>)
                        : (
                            <>
                                <Col xs={3}>

                                    {/*     CATEGORY     */}
                                    <Row xs={12} className='global_accentFont text-center my-3 '>
                                        <h5 onClick={allHandler}
                                            className='global_bisonRedTxt global_cursor'>Categories</h5>
                                    </Row>
                                    {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover border-right'
                                                 type='button'
                                                 key={product._id}
                                            >
                                                <h6>
                                                    {product.category}
                                                </h6>
                                            </Row>
                                    ))}

                                    {/*     MANUFACTURER    */}
                                    <Row xs={12} className='global_accentFont text-center my-3 '>
                                        <h5 onClick={allHandler}
                                            className='global_bisonRedTxt global_cursor'>Manufacturer</h5>
                                    </Row>
                                    {products.map(product => (
                                        <Row xs={12}
                                             onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                             className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover border-right'
                                             type='button'
                                             key={product._id}
                                        >
                                            <h6>
                                                {product.brand}
                                            </h6>
                                        </Row>
                                    ))}
                                </Col>

                                <Col xs={9}>
                                    <Row xs={12}
                                         className='global_accentFont my-3 d-flex justify-content-start'>
                                        <h3 className='global_bisonRedTxt global_cursor my-0 py-0'>{updateCat || updateManufacturer}</h3>
                                    </Row>
                                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>

                                    <Row xs={12}>
                                        {/*    CATEGORY     */}
                                        {(updateCat !== '' ) && (
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

                                        {(updateManufacturer !== '' ) && (
                                            <>
                                                {products.filter(product => product.brand === updateManufacturer).map(filteredProduct => (
                                                    <Col key={filteredProduct._id} sm={12} md={6} lg={3}
                                                         className='d-flex flex-row align-items-stretch'>
                                                        <Product product={filteredProduct} history={history}
                                                                 product_id={filteredProduct._id}/>
                                                    </Col>
                                                ))}
                                            </>
                                        )}

                                        {(updateManufacturer === '' && updateCat === '') && (
                                            <>
                                                {products.map(product => (
                                                    <Col key={product._id} sm={12} md={6} lg={3}
                                                         className='d-flex flex-row align-items-stretch'>
                                                        <Product product={product} history={history}
                                                                 product_id={product._id}/>
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
        </Container>
    )
};

export default ProductsDisplayScreen;