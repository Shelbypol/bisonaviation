import React, {useEffect, useState} from "react";
import {Col, Nav, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductDisplayByCatMan from "./ProductDisplayByCatMan";
import Loader from "../Loader";
import Message from "../Message";
import '../../style/CategoryManufacturerSideBar.css'
import {Route} from "react-router-dom";
import SearchBox from "../SearchBox";
import {Container} from "react-bootstrap/cjs";

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

    const maufacturerArr = [...new Set(products.map(product => product.brand))];
    const catArr = [...new Set(products.map(product => product.category))];


    return (
        <>
            {loading ?
                (<Loader/>)
                : error ?
                    (<Message variant='danger'>{error}</Message>)
                    : (
                        <>
                                <Col xs={2} className='CatMan-nav-menu-items min-vh-100 '>
                                    {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}
                                    <Col xs={12} className='pb-2 mx-0 mb-0 mt-1'>
                                        <Route render={({history}) => <SearchBox history={history}
                                                                                 searchSize={'sm'}
                                                                                 searchClasses={'col-9 py-0 bg-white border-top border-bottom border-left'}
                                                                                 btnSize={'sm'}
                                                                                 btnClasses={'bg-white StickyHeader_search_btn_padding px-1 col-2 rounded-right border-top border-bottom border-right'}
                                                                                 iconClass={'fal fa-search p-0'}
                                        />}/>
                                    </Col>
                                    {(updateManufacturer !== '' || updateCat !== '') &&
                                    (
                                        <>
                                            <Row xs={12}
                                                 className='global_accentFont CatMan-nav-text CatMan-title d-flex justify-content-start mt-1 mb-2 p-0'>
                                                <h3 className='pl-3 global_cursor'>{updateManufacturer || updateCat}</h3>
                                            </Row>

                                            {products.filter(product => product.brand === updateManufacturer).map(filteredCategories => (
                                                <Row xs={12}
                                                     onClick={(ev) => sortByCategoryHandler(filteredCategories.category, ev)}
                                                     className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0'
                                                     type='button'
                                                     key={filteredCategories._id}
                                                >
                                                    <h6 className='CatMan_items'>
                                                        {filteredCategories.category}
                                                    </h6>
                                                </Row>
                                            ))}

                                            {/* ALL PRODUCTS*/}
                                            <Row xs={12}
                                                 className='global_accentFont mt-3 d-flex justify-content-start '
                                                 onClick={displayAllHandler}>
                                                <p className='global_cursor CatMan-sub-titles py-2'>All
                                                    Products</p>
                                            </Row>

                                            {/*   ALL CATEGORIES  */}
                                            <Row xs={12}
                                                 className='global_accentFont text-center d-flex justify-content-start m-0 p-0'>
                                                <p className='global_red global_cursor'>Categories</p>
                                            </Row>

                                            {products.map(product => (
                                                <Row xs={12}
                                                     onClick={(ev) => sortByCategoryHandler(product.category, ev)}
                                                     className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0'
                                                     type='button'
                                                     key={product._id}
                                                >
                                                    <h6 className='CatMan_items'>
                                                        {product.category}
                                                    </h6>
                                                </Row>
                                            ))}

                                            {/*   ALL MANUFACTURES  */}
                                            <Row xs={12}
                                                 className='global_accentFont text-center d-flex justify-content-start m-0 p-0'
                                            >
                                                <p className='global_red global_cursor'>Manufactures</p>
                                            </Row>

                                            {products.map(product => (
                                                <Row xs={12}
                                                     onClick={(ev) => sortByManufacturerHandler(product.brand, ev)}
                                                     className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0'
                                                     type='button'
                                                     key={product._id}
                                                >
                                                    <h6 className='CatMan_items'>
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
                                                 className='global_accentFont text-center my-3 d-flex justify-content-start m-0 p-0'>
                                                <h5 onClick={displayAllHandler}
                                                    className='global_red global_cursor'>Categories</h5>
                                            </Row>

                                            {catArr.map((product, index) => (
                                                <Row xs={12}
                                                     onClick={(ev) => sortByCategoryHandler(product, ev)}
                                                     className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0'
                                                     type='button'
                                                     key={index}
                                                >
                                                    <h6 className='CatMan_items'>
                                                        {product}
                                                    </h6>
                                                </Row>
                                            ))}

                                            <Row xs={12}
                                                 className='global_accentFont text-center my-3 d-flex justify-content-start m-0 p-0'>
                                                <h5 onClick={displayAllHandler}
                                                    className='global_red global_cursor'>Manufacturers</h5>
                                            </Row>

                                            {maufacturerArr.map((product, index) => (
                                                <Row xs={12}
                                                     onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                                     className='btn btn-block global_cursor d-flex justify-content-start m-0 p-0'
                                                     type='button'
                                                     key={index}
                                                >
                                                    <h6 className='CatMan_items'>
                                                        {product}
                                                    </h6>
                                                </Row>

                                            ))}


                                        </>
                                    )}
                                </Col>

                                < Col xs={10}>
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