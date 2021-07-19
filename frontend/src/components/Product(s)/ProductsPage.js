import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Col, Row, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductsImgDisplay from "./ProductsImgDisplay";
import Loader from "../Loader";
import Message from "../Message";
import './ProductsSideBar.css'
import {Route} from "react-router-dom";
import ProductsSearchBox from "./ProductsSearchBox";
import Paginate from "../Paginate";
import ProductHeroAd from "./ProductHeroAd";

const ProductsPage = ({match, history}) => {


    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');

    const [showAd, setShowAd] = useState(true);
    const [sideBar, setSideBar] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1000;

    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;

    const node = useRef();

    useLayoutEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        } else {
            setSideBar(true)
        }
    }, [width]);

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, showAd, sideBar]);


    //SIDE BAR
    const showSideBar = () => {
        setSideBar(!sideBar);
        if (window.innerWidth < breakpoint) {
            window.scrollTo(0, 0)
        }
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        }
        setShowAd(true);
    };

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setUpdateManufacturer('');
        setUpdateCat(a);
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        }
        setShowAd(false);
    };


    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setUpdateCat('');
        setUpdateManufacturer(a);
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        }
        setShowAd(false);
    };

    const manufacturerArr = [...new Set(products.map(product => product.brand))].sort();
    const catArr = [...new Set(products.map(product => product.category))].sort();


    return (
        <>
            {loading ?
                (
                    <div className='min-vh-100 min-vw-100 d-flex justify-content-center align-content-center'>
                        <Loader/>
                    </div>
                )
                : error ?
                    (
                        <div className='min-vh-100 min-vw-100 d-flex justify-content-center align-content-center'>
                            <Message variant='danger'>{error}</Message>
                        </div>
                    )
                    : (
                        <>

                            <Col xs={12}
                                 className='global_cursor ProductsSideBar_hamburger-menu global_black py-2'>
                                <h6 className='pl-2 global_blood-red bg-white' onClick={showSideBar}><span><h3
                                    className='d-inline global_blood-red'>|||</h3></span>
                                </h6>
                                <Route render={({history}) =>
                                    <ProductsSearchBox history={history}
                                                       formClasses={'pr-2'}
                                                       searchSize={'sm'}
                                                       searchClasses={'ProductsSideBar_search-bar'}
                                                       btnSize={'sm'}
                                                       btnClasses={'ProductsSideBar_search-btn px-3 rounded-right'}
                                                       iconClass={'fal fa-search p-0 global_goldenrod'}
                                    />
                                }
                                />
                            </Col>
                            {!sideBar && (
                                <Col xs={12} className='ProductsSideBar_selected-cat mx-2 my-0 py-2'>
                                    <h4 className='global_blood-red'>
                                        {updateManufacturer || updateCat}
                                    </h4>
                                </Col>
                            )}

                            {/*===========   SIDE BAR    ============*/}
                            <Row className=''>
                                <Col
                                    md={sideBar && 2}
                                    xs={sideBar && 12}
                                    className={sideBar ? 'ProductsSideBar_menu active' : 'ProductsSideBar_menu '}
                                    ref={node}
                                    // onClick={(e) => (handleScroll(e))}
                                >

                                    {/*/>*/}

                                    {(updateManufacturer !== '' || updateCat !== '') && (
                                        <>
                                            <Row className='global_accentFont ProductsSideBar_text py-2 '>
                                                <h4 className=' global_cursor global_blood-red'>{updateManufacturer || updateCat}</h4>
                                            </Row>

                                            {/* ALL PRODUCTS*/}
                                            <Row
                                                className='global_accentFont'
                                                onClick={displayAllHandler}>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>
                                                    All Products
                                                </h6>
                                            </Row>

                                            {/*   ALL CATEGORIES  */}
                                            <Row className='global_accentFont'>
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
                                            <Row className='global_accentFont mt-4'>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>Manufactures</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {manufacturerArr.map((product, index) => (
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
                                            <Row
                                                className='global_accentFont'
                                                onClick={displayAllHandler}>
                                                <h6 className='global_cursor ProductsSideBar_text ProductsSideBar_sub-titles'>All
                                                    Products</h6>
                                            </Row>

                                            <Row
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

                                            <Row
                                                className='global_accentFont mt-3 ProductsSideBar_text global_cursor '>
                                                <h6 onClick={displayAllHandler}
                                                    className='ProductsSideBar_sub-titles'>Manufacturers</h6>
                                            </Row>

                                            <Row className='ProductsSideBar_items-bg'>
                                                {manufacturerArr.map((product, index) => (
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

                                {/*     AD & PRODUCTS DISPLAY    */}
                                <Col md={sideBar ? 10 : 12}
                                     xs={!sideBar && 12}
                                >
                                    <Row
                                        className='d-flex justify-content-center'>
                                        {/*<Col xs={11} className='d-flex justify-content-end'>*/}
                                        {/*    <Button*/}
                                        {/*        onClick={() => {*/}
                                        {/*            setShowAd(!showAd)*/}
                                        {/*        }}*/}
                                        {/*        className='bg-transparent global_blood-red global_cursor'>*/}
                                        {/*        {showAd && (*/}
                                        {/*            <p>x</p>*/}
                                        {/*        )}*/}
                                        {/*    </Button>*/}
                                        {/*</Col>*/}
                                        {/*    <Col xs={11} className='d-flex justify-content-center px-1'>*/}

                                        {/*        {showAd && (*/}
                                        {/*            <ProductHeroAd products={products}/>*/}
                                        {/*        )}*/}
                                        {/*</Col>*/}

                                        <Col xs={11} className='px-1 global_white-bg'>
                                            <ProductsImgDisplay products={products}
                                                                history={history}
                                                                match={match}
                                                                keyword={keyword}
                                                                pages={pages}
                                                                page={page}
                                                                updateCatProp={updateCat}
                                                                updateManufacturerProp={updateManufacturer}
                                                                sideBar={sideBar}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </>
                    )}
        </>
    )
};

export default ProductsPage