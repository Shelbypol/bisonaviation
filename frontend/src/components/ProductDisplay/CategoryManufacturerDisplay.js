import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductDisplayByCatMan";
import Loader from "../Loader";
import Message from "../Message";
import '../../style/CategoryManufacturerSideBar.css'

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
        setUpdateManufacturer('');
        setUpdateCat(a)
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('')
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a)
    };

    const maufacturerArr =  [...new Set(products.map(product => product.brand))];
    const catArr =  [...new Set(products.map(product => product.category))];


    return (
        <>
            {loading ?
                (<Loader/>)
                : error ?
                    (<Message variant='danger'>{error}</Message>)
                    : (
                        <>
                            <Col xs={3} className='CatMan-nav-menu-items'>
                                {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}

                                {(updateManufacturer !== '' || updateCat !== '') &&
                                (
                                    <>
                                        <Row xs={12}
                                             className='global_accentFont my-0 CatMan-nav-text'>
                                            <h3 className=' global_cursor-underline my-0'>{updateManufacturer || updateCat}</h3>
                                        </Row>


                                        {products.filter(product => product.brand === updateManufacturer).map(filteredCategories => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(filteredCategories.category, ev)}
                                                 className='CatMan-nav-text btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonDarkFadedBgColorHover'
                                                 type='button'
                                                 key={filteredCategories._id}
                                            >
                                                <h6>
                                                    {filteredCategories.category}
                                                </h6>
                                            </Row>
                                        ))}

                                        {/* ALL PRODUCTS*/}
                                        <Row xs={12}
                                             className='CatMan-nav-text global_accentFont text-center mt-3'
                                             onClick={displayAllHandler}>
                                            <p className='global_bisonRedTxt global_cursor-underline'>All
                                                Products</p>
                                        </Row>

                                        {/*   ALL CATEGORIES  */}
                                        <Row xs={12}
                                             className='CatMan-nav-text global_accentFont text-center'>
                                            <p className='global_bisonRedTxt global_cursor'>Categories</p>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                 className='CatMan-nav-text btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonDarkFadedBgColorHover'
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
                                             className='CatMan-nav-text global_accentFont text-center'
                                        >
                                            <p className='global_bisonRedTxt global_cursor'>Manufactures</p>
                                        </Row>

                                        {products.map(product => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                 className='CatMan-nav-text btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonDarkFadedBgColorHover'
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
                                        <Row xs={12}
                                             className='CatMan-nav-text global_accentFont text-center my-3 '>
                                            <h5 onClick={displayAllHandler}
                                                className='global_bisonRedTxt global_cursor'>Categories</h5>
                                        </Row>

                                        {catArr.map((product, index) => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                 className='CatMan-nav-text btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonDarkFadedBgColorHover'
                                                 type='button'
                                                 key={index}
                                            >
                                                <h6>
                                                    {product}
                                                </h6>
                                            </Row>
                                        ))}

                                        <Row xs={12}
                                             className='CatMan-nav-text global_accentFont text-center my-3 '>
                                            <h5 onClick={displayAllHandler}
                                                className='global_bisonRedTxt global_cursor'>Manufacturers</h5>
                                        </Row>

                                        {maufacturerArr.map((product, index) => (
                                            <Row xs={12}
                                                 onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                 className='CatMan-nav-text btn btn-block global_cursor d-flex justify-content-start m-0 p-0 global_bisonDarkFadedBgColorHover'
                                                 type='button'
                                                 key={index}
                                            >
                                                <h6>
                                                    {product}
                                                </h6>
                                            </Row>

                                        ))}



                                    </>
                                )}
                            </Col>
                            < Col xs={9}>
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