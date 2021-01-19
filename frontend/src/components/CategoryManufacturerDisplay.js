import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../actions/productActions";
import ProductDisplayByCatMan from "./ProductDisplayByCatMan";
import Loader from "./Loader";
import Message from "./Message";

const CategoryManufacturerDisplay = ({match, history}) => {

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber]);

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
        <>
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
                                {
                                    products.map(product => (
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
                                    ))
                                }

                                {/*     MANUFACTURER    */
                                }
                                <Row xs={12} className='global_accentFont text-center my-3 '>
                                    <h5 onClick={allHandler}
                                        className='global_bisonRedTxt global_cursor'>Manufacturer</h5>
                                </Row>
                                {
                                    products.map(product => (
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
                                    ))
                                }
                            </Col>
                            <Col xs={9}>
                                <ProductDisplayByCatMan products={products} keyword={keyword} pages={pages} page={page}
                                                        updateCatProp={updateCat}
                                                        updateManufacturerProp={updateManufacturer}/>
                            </Col>
                        </>
                    )}
        </>
    )
};

export default CategoryManufacturerDisplay