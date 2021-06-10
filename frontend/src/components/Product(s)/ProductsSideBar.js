import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import './CategoryManufacturerSideBar.css'
// import {Route} from "react-router-dom";
import ProductsSearchBox from "./ProductsSearchBox";
import Paginate from "../Paginate";
import {Route} from "react-router-dom";
import './ProductsSideBar.css'


const ProductsSidebar = ({sideBar, history, match, updateCat, updateManufacturer, displayAllHandler}) => {



    return (
        <>

            {sideBar ? (
                <>
                    <Col lg={2} xs={8} className='ProductsSidebar_menu-items border-right'>

                        {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}
                        <Route render={({history}) => <ProductsSearchBox history={history}
                                                                         formClasses={'pb-2 mt-1 ml-n3 ProductsSideBar_search-form'}
                                                                         searchSize={'sm'}
                                                                         searchClasses={'col-9 py-0 ProductsSideBar_search-bar'}
                                                                         btnSize={'sm'}
                                                                         btnClasses={'bg-dark text-white StickyHeader_search_btn_padding px-1 col-2 rounded-right'}
                                                                         iconClass={'fal fa-search p-0'}
                        />
                        }
                        />

                        {(updateManufacturer !== '' || updateCat !== '') && (
                            <>
                                <Row xs={12}
                                     className='global_accentFont ProductsSideBar_text py-2 '>
                                    <h4 className=' global_cursor global_blood-red'>{updateManufacturer || updateCat}</h4>
                                </Row>

                                {/* ALL PRODUCTS*/}
                                <Row xs={12}
                                     className='global_accentFont'
                                     onClick={displayAllHandler}>
                                    <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>
                                        All Products
                                    </h6>
                                </Row>

                                {/*   ALL CATEGORIES  */}
                                <Row xs={12}
                                     className='global_accentFont'>
                                    <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Categories</h6>
                                </Row>


                                <Row className='ProductsSideBar_items-bg'>
                                    {catArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByCategoryHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>

                                {/*   ALL MANUFACTURES  */}
                                <Row xs={12} className='global_accentFont mt-4'>
                                    <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Manufactures</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {maufacturerArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )}

                        {/*==============================================================================*/}

                        {/*    ALL CAT & ALL MAN INITIAL DISPLAY    */}
                        {(updateCat === '' && updateManufacturer === '') && (
                            <>
                                {/* ALL PRODUCTS*/}
                                <Row xs={12}
                                     className='global_accentFont'
                                     onClick={displayAllHandler}>
                                    <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>All
                                        Products</h6>
                                </Row>

                                <Row xs={12}
                                     className='global_accentFont'>
                                    <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Categories</h6>
                                </Row>

                                <Row className='ProductsSideBar_items-bg'>
                                    {catArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByCategoryHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>

                                <Row xs={12}
                                     className='global_accentFont mt-3 ProductsSideBar_text global_cursor '>
                                    <h6 onClick={displayAllHandler}
                                        className='ProductsSideBar_sub-titles'>Manufacturers</h6>
                                </Row>


                                <Row className='ProductsSideBar_items-bg'>
                                    {maufacturerArr.map((product, index) => (
                                        <Col xs={12}
                                             onClick={(ev) => sortByManufacturerHandler(product, ev)}
                                             className='btn btn-block global_cursor ProductsSideBar_text ProductsSideBar_items'
                                             type='button'
                                             key={index}
                                        >
                                            {product}
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        )}
                    </Col>

            </>

    )};
    export default ProductsSidebar


