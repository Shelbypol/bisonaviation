import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../../actions/productActions";
import ProductsImgDisplay from "./ProductsImgDisplay";
import Loader from "../Loader";
import Message from "../Message";
import './ProductsSideBar.css'
import './CategoryManufacturerSideBar.css'
import {Route} from "react-router-dom";
import ProductsSearchBox from "./ProductsSearchBox";
import Paginate from "../Paginate";
import ProductHeroAd from "./ProductHeroAd";

const ProductsPage = ({match, history}) => {

    const [sideBar, setSideBar] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');
    const [clicked, setClicked] = useState(false);
    const [showAd, setShowAd] = useState(true);

    const breakpoint = 1150;

    const keyword = match.params.keyword;

    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;


    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        if(width < breakpoint){
            setSideBar(false)
        }else{
            setSideBar(true)
        }
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);

    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, setUpdateManufacturer, setUpdateCat, width, showAd, sideBar]);


    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    //SIDE BAR
    const showSideBar = () => setSideBar(!sideBar);

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setClicked(true);
        setUpdateManufacturer('');
        setUpdateCat(a);
        if (width < breakpoint) {
            setSideBar(!sideBar);
        }
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
        if (width < breakpoint) {
            setSideBar(!sideBar);
        }
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setClicked(true);
        setUpdateCat('');
        setUpdateManufacturer(a);
        if (width < breakpoint) {
            setSideBar(!sideBar);
        }
    };

    const maufacturerArr = [...new Set(products.map(product => product.brand))];
    const catArr = [...new Set(products.map(product => product.category))];


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

                            {sideBar ? (
                                <>
                                    <Col lg={2} xs={12}
                                         className='global_cursor ProductsSideBar_sidebar-icon d-flex justify-content-end'>
                                        <p onClick={showSideBar}>x</p>
                                    </Col>
                                    <Col lg={10} xs={0}> </Col>
                                </>
                            ) : (
                                <>
                                    <Col lg={2} xs={12}
                                         className=' bg-transparent global_cursor ProductsSideBar_icon pl-4 pt-2'>
                                        <h6 className='global_blood-red bg-white' onClick={showSideBar}><span><h3
                                            className='d-inline global_blood-red'>|||</h3></span>&nbsp;categories
                                        </h6>
                                        {width < breakpoint && (
                                            <h5 className='pt-2'>
                                                {updateCat || updateManufacturer}
                                            </h5>
                                        )}
                                    </Col>
                                    {/*<Col lg={10} xs={0}> </Col>*/}
                                </>
                            )}

                            {sideBar ? (
                                <>
                                    <Col lg={2} xs={8} className='ProductsSidebar_menu-items border-right'>
                                        {/*<div className='ProductsSideBar_scroll p-0 m-0'>*/}
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

                                        {(updateManufacturer !== '' || updateCat !== '') &&
                                        (
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
                                                <Row xs={12}
                                                     className='global_accentFont mt-4'
                                                >
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

                                    <Col lg={10} className=''>

                                        <Row className='mt-3 d-none d-md-block pr-5'>
                                            <Col xs={12} className='d-flex justify-content-end'>
                                                <button onClick={() => {
                                                    setShowAd(!showAd)
                                                }}
                                                        className='bg-transparent global_blood-red border-0 global_cursor'>
                                                    {showAd && (
                                                        <>
                                                            hide
                                                        </>
                                                    )}
                                                </button>
                                            </Col>
                                            <Col xs={12} className='mt-0 mb-5'>

                                                {showAd && (
                                                    <ProductHeroAd products={products}/>
                                                )}
                                            </Col>
                                        </Row>

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
                                    </>
                                    ) : (
                                    <>

                                        <Col xs={12}>
                                            <Row className='mt-3 d-none d-md-block pr-5'>
                                                <Col xs={12} className='d-flex justify-content-end'>
                                                    <button onClick={() => {
                                                        setShowAd(!showAd)
                                                    }}
                                                            className='bg-transparent global_blood-red border-0 global_cursor'>
                                                        {showAd && (
                                                            <>
                                                                hide
                                                            </>
                                                        )}
                                                    </button>
                                                </Col>
                                                <Col xs={12} className='mt-0 mb-5'>

                                                    {showAd && (
                                                        <ProductHeroAd products={products}/>
                                                    )}
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={12}
                                             className='pt-5 mt-2 CatMan_products min-vh-100 bg-white d-flex justify-content-center ml-1 '>
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

                                    </>
                                    )}

                                </>

                            )}
                        </>
                    )
            };

            export default ProductsPage