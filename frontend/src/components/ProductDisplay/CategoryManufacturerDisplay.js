import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProductDetails, listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductDisplayByCatMan";
import Loader from "../Loader";
import Message from "../Message";

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
    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, setUpdateManufacturer, setUpdateCat]);


    //  SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        // setUpdateManufacturer('');
        return setUpdateCat(a)
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('')
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        // setUpdateCat('');
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
                            <Col xs={3} className=''>

                                {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}


                                {(updateManufacturer !== '' || updateCat !== '') &&
                                (
                                    <>
                                        <Row xs={12}
                                             className='global_accentFont text-center my-3'
                                             onClick={displayAllHandler}>
                                            <h5 className='global_bisonRedTxt global_cursor-underline'>{updateManufacturer || updateCat}</h5>
                                        </Row>

                                        {products.filter(product => product.brand === updateManufacturer).map(filteredCategories => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(filteredCategories.category, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover'
                                                 type='button'
                                                 key={filteredCategories._id}
                                            >
                                                <h6>
                                                    {filteredCategories.category}
                                                </h6>
                                            </Row>
                                        ))}

                                        {/*   ALL CATEGORIES  */}
                                        <Row xs={12}
                                             className='global_accentFont text-center mt-5'
                                             onClick={displayAllHandler}>
                                            <p className='global_bisonRedTxt global_cursor-underline'>all categories</p>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                 // onClick={(ev) => sortByManufacturerHandler(product.category, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover'
                                                 type='button'
                                                 key={product._id}
                                            >
                                                <h6>
                                                    {product.category}
                                                </h6>
                                            </Row>
                                        ))}

                                        {/*   ALL MANUFACTURES  */}
                                        <Row xs={12}
                                             className='global_accentFont text-center mt-1'
                                             onClick={displayAllHandler}>
                                            <p className='global_bisonRedTxt global_cursor-underline'>all manufactures</p>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover'
                                                 type='button'
                                                 key={product._id}
                                            >
                                                <h6>
                                                    {product.brand}
                                                </h6>
                                            </Row>
                                        ))}

                                    </>

                                )}

            {/*==============================================================================*/}
                                {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                                {(updateCat === '' && updateManufacturer === '') && (
                                    <>
                                        <Row xs={12} className='global_accentFont text-center my-3 '>
                                            <h5 onClick={displayAllHandler}
                                                className='global_bisonRedTxt global_cursor-underline'>Categories</h5>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover'
                                                 type='button'
                                                 key={product._id}
                                            >
                                                <h6>
                                                    {product.category}
                                                </h6>
                                            </Row>
                                        ))}

                                        <Row xs={12} className='global_accentFont text-center my-3 '>
                                            <h5 onClick={displayAllHandler}
                                                className='global_bisonRedTxt global_cursor-underline'>Manufacturers</h5>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                // onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                 className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonFadedRedHover'
                                                 type='button'
                                                 key={product._id}
                                            >
                                                <h6>
                                                    {product.brand}
                                                </h6>
                                            </Row>
                                        ))}
                                    </>
                                )}


                            </Col>
                            < Col xs={9} className='border-right'>
                                < ProductDisplayByCatMan products={products}
                                                         history={history}
                                                         match={match}
                                                         keyword={keyword}
                                                         pages={pages}
                                                         page={page}
                                                         updateCatProp={updateCat}
                                                         updateManufacturerProp={updateManufacturer}/>
                            </Col>
                        </>
                    )}
        </>
    )
};

export default CategoryManufacturerDisplay