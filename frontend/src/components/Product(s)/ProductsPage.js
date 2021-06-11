import React, {useEffect, useRef, useState} from "react";
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
import SignInDropdown from "../SignIn/SignInDropdown";

const ProductsPage = ({match, history}) => {

    const [sideBar, setSideBar] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [updateCat, setUpdateCat] = useState('');
    const [updateManufacturer, setUpdateManufacturer] = useState('');
    const [clicked, setClicked] = useState(false);
    const [showAd, setShowAd] = useState(true);

    const breakpoint = 1000;
    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const {products, pages, page, loading, error} = productList;

    const node = useRef();

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
        // document.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleWindowResize);
        // return () => {
        // document.removeEventListener("scroll", handleScroll);// };
    }, [dispatch, updateCat, updateManufacturer, keyword, pageNumber, setUpdateManufacturer, setUpdateCat, width, showAd, sideBar]);

    const handleWindowResize = () => {
        if (window.innerWidth < breakpoint) {
            setSideBar(false)
        } else {
            setSideBar(true)
        }
        setWidth(window.innerWidth);
    };

    const handleScroll = e => {
        // if (node.current.contains(e.target) === false) {
        //     setSideBar(false)
        // }else if(node.current.contains(e.target) === null){
        //     setSideBar(false)
        // }
    };


    //SIDE BAR
    const showSideBar = () => setSideBar(!sideBar);

    // SORT CAT HANDLER
    const sortByCategoryHandler = (a) => {
        setClicked(true);
        setUpdateManufacturer('');
        setUpdateCat(a);
        handleWindowResize();
    };

    const displayAllHandler = () => {
        setUpdateManufacturer('');
        setUpdateCat('');
        handleWindowResize();
    };

    //  SORT BRAND HANDLER
    const sortByManufacturerHandler = (a) => {
        setClicked(true);
        setUpdateCat('');
        setUpdateManufacturer(a);
        handleWindowResize();
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

                            <Col lg={2} xs={12}
                                 className=' global_cursor ProductsSideBar_icon pl-4 pt-3 pb-3 mt-lg-4 global_black'>
                                <>
                                    <h6 className='global_blood-red bg-white' onClick={showSideBar}><span><h3
                                        className='d-inline global_blood-red'>|||</h3>&nbsp;categories</span>
                                    </h6>

                                    {/*<h5 className='pt-2'>*/}
                                    {/*    {updateCat || updateManufacturer}*/}
                                    {/*</h5>*/}
                                </>
                            </Col>

                            <Col lg={10} xs={0}> </Col>


                            {/*===========   SIDE BAR    ============*/}
                            <Row
                                xs={sideBar ? 2 : 0}
                                className={sideBar ? 'ProductsSideBar_menu active' : 'ProductsSideBar_menu '}
                                ref={node}
                                onClick={(e) => (handleScroll(e))}
                            >
                                <Col xs={12}>

                                    {/*<Row className='ProductsSideBar_text'>*/}
                                    {/*     MANUFACTURER SORT DISPLAY AVAILABLE CATS ON CLICK    */}
                                    <Route render={({history}) => <ProductsSearchBox history={history}
                                                                                     formClasses={'pb-2 mt-1 ml-n3 ProductsSideBar_search-form'}
                                                                                     searchSize={'sm'}
                                                                                     searchClasses={'py-0 ProductsSideBar_search-bar'}
                                                                                     btnSize={'sm'}
                                                                                     btnClasses={'bg-dark text-white ProductsSideBar_search-btn px-1 rounded-right'}
                                                                                     iconClass={'fal fa-search p-0'}
                                    />
                                    }
                                    />
                                    {/*</Row>*/}

                                    {(updateManufacturer !== '' || updateCat !== '') && (
                                        <>
                                            <Row
                                                className='global_accentFont ProductsSideBar_text py-2 '>
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

                                            {/*   ALL MANUFACTURES  */}
                                            <Row className='global_accentFont mt-4'>
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
                            </Row>

                            <Row className='m-0 p-0'>
                                <Col lg={sideBar ? 10 : 12}>
                                    {/*<Row className={showAd ? 'mt-3 mr-1 d-none d-md-block' : 'd-none'}>*/}
                                    <Row className={showAd ? 'mt-3 mr-1 d-none d-md-block' : 'd-none'}>
                                        <Col xs={12} className='d-flex justify-content-end mb-2'>
                                            <button onClick={() => {
                                                setShowAd(!showAd)
                                            }}
                                                    className='bg-transparent global_blood-red border-0 global_cursor pr-4'>
                                                {showAd && (
                                                    <>
                                                        hide
                                                    </>
                                                )}
                                            </button>
                                        </Col>

                                        <Col xs={12} className='mt-0 mx-0 mb-5 d-flex justify-content-center'>
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
                            </Row>
                        </>
                    )}
        </>
    )
};

export default ProductsPage